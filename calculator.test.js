const calculator = require("./calculator");

describe("calculator operations:", () => {
  describe("operation not supported", () => {
    it("should return an error with unknow operator", () => {
      expect(calculator(1, 2, "sqrt")).toBe("Operation not supported");
    });
  });

  describe("invalid input", () => {
    it("should return an error on first operand", () => {
      expect(calculator("a", 2, "add")).toBe("Invalid input");
    });
    it("should return an error on second operand", () => {
      expect(calculator(1, "b", "add")).toBe("Invalid input");
    });
  });

  describe("empty paramater detected", () => {
    it("should return an error with empty operator", () => {
      expect(calculator(1, 2, "")).toBe("Empty paramater detected");
    });

    it("should return an error with empty operand", () => {
      expect(calculator(1, "", "add")).toBe("Empty paramater detected");
    });
  });

  describe("add", () => {
    it("should add two numbers positive", () => {
      expect(calculator(1, 2, "add")).toBe(3);
    });
    it("should add two numbers negative", () => {
      expect(calculator(-1, -2, "add")).toBe(-3);
    });
    it("should add two numbers zero", () => {
      expect(calculator(0, 0, "add")).toBe(0);
    });
    it("should add two numbers negative and positive", () => {
      expect(calculator(-1, 2, "add")).toBe(1);
    });
    it("should add two numbers decimal with 2 decimals with result under x.495", () => {
      expect(calculator(1.111, 2.38, "add")).toBe(3.49);
    });
    it("should add two numbers decimal with 2 decimals with result over x.495", () => {
      expect(calculator(1.111, 2.384, "add")).toBe(3.5);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers positive", () => {
      expect(calculator(5, 2, "subtract")).toBe(3);
    });
    it("should subtract two numbers negative", () => {
      expect(calculator(-5, -2, "subtract")).toBe(-3);
    });
    it("should subtract two numbers zero", () => {
      expect(calculator(0, 0, "subtract")).toBe(0);
    });
    it("should subtract two numbers negative and positive", () => {
      expect(calculator(-5, 2, "subtract")).toBe(-7);
    });
    it("should subtract two numbers decimal with 2 decimals with result under x.495", () => {
      expect(calculator(5.5, 2.006, "subtract")).toBe(3.49);
    });
    it("should subtract two numbers decimal with 2 decimals with result over x.495", () => {
      expect(calculator(5.5, 2.004, "subtract")).toBe(3.5);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers positive", () => {
      expect(calculator(5, 2, "multiply")).toBe(10);
    });
    it("should multiply two numbers negative", () => {
      expect(calculator(-5, -2, "multiply")).toBe(10);
    });
    it("should multiply two numbers zero", () => {
      expect(calculator(0, 0, "multiply")).toBe(0);
    });
    it("should multiply two numbers negative and positive", () => {
      expect(calculator(-5, 2, "multiply")).toBe(-10);
    });
    it("should multiply two numbers decimal", () => {
      expect(calculator(5.5, 2.2, "multiply")).toBe(12.1);
    });
  });

  describe("divide", () => {
    it("should divide two numbers positive", () => {
      expect(calculator(10, 2, "divide")).toBe(5);
    });
    it("should divide two numbers negative", () => {
      expect(calculator(-10, -2, "divide")).toBe(5);
    });
    it("should divide two numbers decimal", () => {
      expect(calculator(10.5, 2.2, "divide")).toBe(4.77);
    });
    it("should divide two numbers zero", () => {
      expect(calculator(0, 0, "divide")).toBeNaN();
    });
    it("should divide two numbers negative and positive", () => {
      expect(calculator(-10, 2, "divide")).toBe(-5);
    });
  });
});
