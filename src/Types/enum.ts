enum Role {PROGRAMMER, DESIGNER, TESTER};

let myRole = Role.PROGRAMMER; // ts automatically gave the type as Role

enum Rolling {PROGRAMMER = 68, DESIGNER, TESTER}; // in this case DESIGNER will be 69, and TESTER will be 70

enum Rolled {PROGRAMMER = "Programmer", DESIGNER = 77, TESTER}  // and mix the values (not sure why)
