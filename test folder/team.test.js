const Team = require(".../Team.js");

describe("Team", () => {
    describe("Test framework", () => {
        it("Test it - should fail", () =>{
            expect(true).toEqual(false);
        });
        it("Test it - should pass", () => {
            expect(true).toEqual(true);

        });
    });
})