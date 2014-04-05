ZIP := zip
ZIPFILE := MyExtn.zip

.PHONY:	all zip clean

all: zip

clean:
	rm $(ZIPFILE)

zip :
	$(ZIP) $(ZIPFILE) -9 -r * -x Makefile
