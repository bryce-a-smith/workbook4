"use strict";

let partCode1 = "XYZ:1234-L"

function getSupplier(code) {
    return code.substring(0, code.indexOf(":"));
}

function getProductNumber(code) {
    return code.substring(code.indexOf(":") + 1, code.indexOf("-"));
}

function getSize(code) {
    return code.substring(code.indexOf("-") + 1);
}

function parsePartCode(code) {
    return {
        supplierCode: getSupplier(code),
        productNumber: getProductNumber(code),
        size: getSize(code)
    }
}

function printPartsObject(codeObject) {
    console.log(`Supplier: ${codeObject.supplierCode}`);
    console.log(`Product Number: ${codeObject.productNumber}`);
    console.log(`Size: ${codeObject.size}`);
}

let codeObject1 = parsePartCode(partCode1);

printPartsObject(codeObject1);

