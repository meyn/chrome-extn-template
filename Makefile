ZIP := zip
ZIPFILE := MyExtn.zip

.PHONY:	all background popup zip clean

all: zip

background:
	node ./js/libs/r.js -o name=main out=./js/main-built.js baseUrl=./js

popup:
	node ./js/libs/r.js -o name=popup out=./js/popup-built.js baseUrl=./js

clean:
	@rm $(ZIPFILE) ./js/popup-built.js ./js/main-built.js

zip:
	$(ZIP) $(ZIPFILE) -9 -r * -x Makefile js/libs/r.js
