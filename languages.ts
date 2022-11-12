import { codeBlock } from "common-tags"

export interface Language {
  name: string
  generateCode(genders: string[]): string
  [key: string]: any
}

export const languages: Language[] = [
  {
    name: "Python",
    generateCode(genders) {
      return codeBlock`
        from enum import Enum

        class Gender(Enum):
            ${genders.map(this.generateMember).join("\n")}
      `
    },
    generateMember(gender: string) {
      return `${gender.toUpperCase()} = "${gender}"`
    },
  },
  {
    name: "TypeScript",
    generateCode(genders) {
      return codeBlock`
        enum Gender {
          ${genders.map(this.generateMember).join("\n")}
        }
      `
    },
    generateMember(gender: string) {
      return `${gender.toUpperCase()} = "${gender}",`
    },
  },
  {
    name: "C#",
    generateCode(genders) {
      return codeBlock`
        enum Gender
        {
            ${genders.join(",\n")}
        }
      `
    },
  },
  {
    name: "Java",
    generateCode(genders) {
      return codeBlock`
        enum Gender {
            ${genders.map((x) => x.toUpperCase()).join(",\n")}
        }
      `
    },
  },
]
