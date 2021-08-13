describe("The question list", () => {
    // Runs before each test in a describe block
    beforeEach(() => {
        console.log("Before each!")
    });

    // Only runs once before all tests in a describe block
    // beforeAll will execute first regardless of placement in realtion to beforeEach
    beforeAll(() => {
        console.log("Before all!")
    });

    afterEach(() => {
        console.log("After each!")
    });

    afterAll(() => {
        console.log("After all!")
    });
    
    it ("should display a list of items", () => {
        expect(40+2).toEqual(42);
    });

    it ("should be the meaning of life", () => {
        expect(40+2).toEqual(42);
    });
});