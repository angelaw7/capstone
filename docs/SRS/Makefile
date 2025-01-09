# Makefile
# From https://danielkaes.wordpress.com/2009/03/14/compiling-latex-documents-using-makefiles/

PROJECT=SRS #SRS or CA
TEX=pdflatex
BUILDTEX=$(TEX) $(PROJECT).tex

all:
	$(BUILDTEX)
	$(BUILDTEX)
	$(BUILDTEX)

clean-all:
	rm -f *.dvi *.log *.bak *.aux *.bbl *.blg *.idx *.ps *.eps *.pdf *.toc *.out *~

clean:
	rm -f *.log *.bak *.aux *.bbl *.blg *.idx *.toc *.out *.synctex.gz *~