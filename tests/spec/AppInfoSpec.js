define([
	'appInfo'
], function(AppInfo) {
	describe("AppInfo", function() {
		it("should have a getName(), getShortName() and getVersion() function", function() {
			expect(typeof AppInfo.getName).toBe("function");
			expect(typeof AppInfo.getShortName).toBe("function");
			expect(typeof AppInfo.getVersion).toBe("function");
		});
	});
});