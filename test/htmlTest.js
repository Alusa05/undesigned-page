// test/htmlTest.js

const { JSDOM } = require('jsdom');
const { expect } = require('chai');
const fs = require('fs');

// Load the HTML file
const html = fs.readFileSync('./index.html', 'utf8');

describe('HTML Structure', () => {
    let dom;
    let document;

    before(() => {
        // Create a JSDOM instance
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    it('should have a header with the correct title', () => {
        const header = document.querySelector('header h1');
        expect(header).to.exist;
        expect(header.textContent).to.equal('Welcome to this page');
    });

    it('should have a main section with four subsections', () => {
        const sections = document.querySelectorAll('main section');
        expect(sections.length).to.equal(4);
    });

    it('should have a section about CSS', () => {
        const cssSection = document.querySelector('main section:nth-of-type(2)');
        expect(cssSection).to.exist;
        expect(cssSection.querySelector('h2').textContent).to.equal('What is CSS?');
    });

    it('should have a section about HTML', () => {
        const htmlSection = document.querySelector('main section:nth-of-type(3)');
        expect(htmlSection).to.exist;
        expect(htmlSection.querySelector('h2').textContent).to.equal('What is HTML?');
    });

    it('should have a section about JavaScript', () => {
        const jsSection = document.querySelector('main section:nth-of-type(4)');
        expect(jsSection).to.exist;
        expect(jsSection.querySelector('h2').textContent).to.equal('What is JavaScript?');
    });
});