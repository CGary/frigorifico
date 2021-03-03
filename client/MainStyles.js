import { createGlobalStyle } from "styled-components";
import latoRegular from "./fonts/Lato-Regular.woff2";

export default createGlobalStyle`
@font-face {
    font-family: "Lato Regular";
    src: url(${latoRegular});
}

/*css de la app movil*/
:root {
    --cr-error: #F96A3E;
    --cr-ok: #83DBB5;

    --cr-linea: #00B9F7;

    --cr-fondo-oscuro: #f2f2f2;
    --cr-fondo-visible: #009fe0;
    --cr-fondo-claro: #f2f8ff;
    --cr-fondo-negro: #31373a;

    --cr-texto-normal: #818181;
    --cr-texto-claro: #a6ebfe;
    --cr-texto-noclaro: #33AACE;
    --cr-texto-oscuro: #333333;
    --cr-texto-alterno: #009fe0;

    --px-font-big: 30px;
    --px-font-title: 21px;
    --px-font-subtitle: 17px;
    --px-font-body: 15px;
    --px-svg-size: 24px;

    --px-alto-header: 50px;
    --px-alto-subheader: 30px;
    --px-ancho-ficha: 480px;
    --px-alto-ficha-header: 36px;
    --px-margen-derecho: 8px;
    --px-margen-izquierdo: 18px;
    --px-border-radius: 3px;    
    --px-padding-base: 8px;
}

/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size: var(--px-font-body);
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size: var(--px-font-body);
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

input, select, textarea, option, button {
    outline: none;
    outline-style: none;
    box-shadow: none;
    margin: 0;
    border: 0;
    font-family: "Lato Regular";
}

*, *:before, *:after {
    box-sizing: inherit;
}

html, body
{
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    overflow: hidden;
    height: 100vh;
    width: 100vw;    
    font-family: "Lato Regular";
    box-sizing: border-box;
    user-select: none;
}

#app {
    overflow-x: hidden;
    overflow-y: hidden;
    overflow: hidden;
    height: 100%;
    width: 100%;
}


html {
    font-size: var(--px-font-body);
    color: var(--cr-texto-normal);
}

input {
    -moz-appearance: textfield;
}
input, textarea {
    /* font-size: var(--px-font-body); */
    color: var(--cr-texto-normal);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

button {
    /* font-size: var(----px-font-body); */
}

a {
    text-decoration: none;
    cursor: pointer;
}

.table-th-bold {
    font-weight: 700;
}

.dataTables_scrollHeadInner{  width:100% !important; }
.dataTables_scrollHeadInner table{  width:100% !important; }

.MuiButton-label {
    text-transform: none;
}
`;
