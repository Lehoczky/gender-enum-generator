import { codeBlock } from "common-tags";

const python = {
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
};

const typescript = {
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
};

export default [python, typescript];
