# commands
ZIP := zip
SYMLINK := ln -sfn
COPY := cp
NODEJS := node
DEL := rm

BUILD_SCRIPTS_DIR := ./build
BUILD_OP_DIR := ./built
JS_DIR := ./js

RJS_OPTIMIZE_SCRIPT := ./dev/libs/r.js
MAKE_MANIFEST_SCRIPT := $(BUILD_SCRIPTS_DIR)/MakeManifest.js
CHROME_MANIFEST_FILE := manifest.json

ZIPFILE := $(addsuffix .zip, $(notdir $(CURDIR)))
PKG_EXCLUDES := Makefile "tests/*" "build/*" "dev/*" "$(BUILD_OP_DIR)/*" js/build.txt

.PHONY:	dev major minor patch minify major-manifest minor-manifest patch-manifest rel pkg clean

dev:
	$(NODEJS) $(MAKE_MANIFEST_SCRIPT) dev
	$(COPY) $(BUILD_SCRIPTS_DIR)/$(CHROME_MANIFEST_FILE) $(CHROME_MANIFEST_FILE)
	$(SYMLINK) ./dev $(JS_DIR)

major: clean major-manifest minify pkg

minor: clean minor-manifest minify pkg

patch: clean patch-manifest minify pkg

minify:
	$(NODEJS) $(RJS_OPTIMIZE_SCRIPT) -o $(BUILD_SCRIPTS_DIR)/build.js

major-manifest:
	$(NODEJS) $(MAKE_MANIFEST_SCRIPT) rel major
	$(COPY) $(BUILD_SCRIPTS_DIR)/$(CHROME_MANIFEST_FILE) $(CHROME_MANIFEST_FILE)

minor-manifest:
	$(NODEJS) $(MAKE_MANIFEST_SCRIPT) rel minor
	$(COPY) $(BUILD_SCRIPTS_DIR)/$(CHROME_MANIFEST_FILE) $(CHROME_MANIFEST_FILE)

patch-manifest:
	$(NODEJS) $(MAKE_MANIFEST_SCRIPT) rel patch
	$(COPY) $(BUILD_SCRIPTS_DIR)/$(CHROME_MANIFEST_FILE) $(CHROME_MANIFEST_FILE)

pkg:
	$(SYMLINK) $(BUILD_OP_DIR) $(JS_DIR)
	$(ZIP) $(ZIPFILE) -9 -r * -x $(PKG_EXCLUDES)

clean:
	@$(DEL) -rf $(ZIPFILE) $(JS_DIR) $(BUILD_OP_DIR) $(CHROME_MANIFEST_FILE)