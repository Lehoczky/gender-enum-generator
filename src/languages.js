import { codeBlock } from "common-tags";

export default [
  {
    name: "Python",
    generateCode(genders) {
      return codeBlock`
      from enum import Enum

      class Gender(Enum):
          ${genders.map(this.generateMember).join("\n")}
      `;
    },
    generateMember(gender) {
      return `${gender.toUpperCase()} = "${gender}"`;
    }
  },
  {
    name: "TypeScript",
    generateCode(genders) {
      return codeBlock`
      enum Gender {
        ${genders.map(this.generateMember).join("\n")}
      }
    `;
    },
    generateMember(gender) {
      return `${gender.toUpperCase()} = "${gender}",`;
    }
  }
];
