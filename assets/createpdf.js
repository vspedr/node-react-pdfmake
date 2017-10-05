const createpdf = (function () {

  let definition = null;
  let name = null;
  let pdf = null;

  return {
    initialize(_definition, _name) {
      definition = JSON.parse(_definition);
      name = _name;
      pdf = pdfMake.createPdf(definition);
    },
    print() {
      pdf.print()
    },
    open() {
      pdf.open()
    },
    save() {
      pdf.download(name + '.pdf')
    }
  }
}());
