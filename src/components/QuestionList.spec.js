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
    // it.only would isolate the test. You can run multiple isolated tests using "only" simulatentously
    // it.only ("should display a list of items", () => {
    //     expect(40+2).toEqual(42);
    // });

    // it.skip allows Jest to skip over a test
    it.skip ("should be the meaning of life", () => {
        expect(40+2).toEqual(43);
    });

    it ("should display a list of items", () => {
        expect(40+2).toEqual(42);
    });

    it ("should be the meaning of life", () => {
        expect(40+2).toEqual(42);
    });
});