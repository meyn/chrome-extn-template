define([
	'module1'
], function(Module) {
	describe("Module1", function() {
		it("should have an init() function", function() {
			console.log(Module);
			expect(typeof Module.init).toBe("function");
		});
	});
});