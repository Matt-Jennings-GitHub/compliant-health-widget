export const styles = `
    .widget__container * {
        box-sizing: border-box;
    }        
    h3, p, input {
        margin: 0;
        padding: 0;
    }
    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        overflow: auto;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 10px;
        box-sizing: border-box;
    }
    .widget__icon {
        cursor: pointer;
        width: 50%;
        position: absolute;
        top: 14px;
        left: 14px;
        transition: transform .3s ease;
    }
    .widget__hidden {
        transform: scale(0);
    }
    .button__container {
        border: none;
        background-color: #0f172a;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }
    .widget__container.hidden {
        max-height: 0px;
    }
    .widget__header {
        padding: 1rem 2rem 1.5rem;
        background-color: #0f172a;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }
    .widget__header h3 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 8px;
    }
    form {
        padding: 2rem 1rem 1.5rem;
    }
    form .form__field {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
    }
    .form__field label {
        margin-bottom: 8px;
        font-size: 14px;
    }
    .form__field input,
    .form__field textarea {
        border: 1px solid #000000ad;
        border-radius: 3px;
        padding: 8px 10px;
        background-color: #fff;
    }
    .form__field input {
        height: 48px;
    }
    .form__field textarea::placeholder {
        font-family: Helvetica, Arial ,sans-serif;
    }
    form button {
        height: 48px;
        border-radius: 6px;
        font-size: 18px;
        background-color: #0f172a;
        color: #fff;
        border: 0;
        width: 100%;
        cursor: pointer;
    }
    form button:hover {
        background-color: rgba(0, 0, 0, 95%);
    }
   .cert__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    color: white;
    font-weight: bold;
    gap: 16px;
    margin:16px 1rem 0px 1rem;
    padding: 16px;
    background-color: #2781f3;
    border-radius: 6px;
   }

`;

export const SHIELD_ICON = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_19_11)">
<g clip-path="url(#clip1_19_11)">
<path d="M16 1.19907C12.3894 4.61052 7.58097 6.48161 2.60225 6.41248C1.96894 8.33217 1.64705 10.34 1.64869 12.3605C1.64869 21.2325 7.74639 28.6861 16 30.8009C24.2536 28.6877 30.3513 21.234 30.3513 12.362C30.3513 10.2837 30.0164 8.28302 29.3977 6.41089H29.1553C24.059 6.41089 19.4283 4.43087 16 1.19907Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.91015 9.35148C9.65281 9.30485 13.2514 7.8988 16.0375 5.39449C18.8234 7.89927 22.422 9.30579 26.1648 9.35277C26.307 10.1947 26.3794 11.0625 26.3794 11.9446C26.3794 18.7122 22.0616 24.4696 16.0375 26.6029C10.0133 24.4683 5.69556 18.711 5.69556 11.9433C5.69556 11.0599 5.76924 10.1947 5.91015 9.35148Z" fill="white"/>
<rect x="14.4862" y="10.4196" width="3.11351" height="9.6" rx="1.55676" fill="black"/>
<rect x="11.2" y="16.4736" width="2.94054" height="9.6" rx="1.47027" transform="rotate(-90 11.2 16.4736)" fill="black"/>
</g>
</g>
<defs>
<clipPath id="clip0_19_11">
<rect width="32" height="32" fill="white"/>
</clipPath>
<clipPath id="clip1_19_11">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>
`;

export const CLOSE_ICON = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.41436 7.43249C7.67976 7.16691 8.03967 7.01771 8.41494 7.01771C8.79021 7.01771 9.15012 7.16691 9.41552 7.43249L15.4912 13.5142L21.5668 7.43249C21.6973 7.29719 21.8535 7.18926 22.0262 7.11501C22.1988 7.04077 22.3845 7.00169 22.5725 7.00005C22.7604 6.99842 22.9467 7.03426 23.1207 7.10549C23.2946 7.17673 23.4526 7.28192 23.5855 7.41493C23.7184 7.54795 23.8235 7.70612 23.8946 7.88022C23.9658 8.05433 24.0016 8.24087 23.9999 8.42898C23.9983 8.61708 23.9593 8.80298 23.8851 8.97581C23.8109 9.14865 23.7031 9.30497 23.5679 9.43566L17.4923 15.5174L23.5679 21.5992C23.8257 21.8663 23.9684 22.2242 23.9652 22.5956C23.9619 22.9671 23.8131 23.3224 23.5507 23.5851C23.2883 23.8477 22.9333 23.9967 22.5623 23.9999C22.1912 24.0032 21.8337 23.8604 21.5668 23.6023L15.4912 17.5206L9.41552 23.6023C9.1486 23.8604 8.79111 24.0032 8.42003 23.9999C8.04896 23.9967 7.694 23.8477 7.4316 23.5851C7.16921 23.3224 7.02037 22.9671 7.01714 22.5956C7.01392 22.2242 7.15657 21.8663 7.41436 21.5992L13.49 15.5174L7.41436 9.43566C7.14905 9.16999 7 8.80972 7 8.43407C7 8.05843 7.14905 7.69816 7.41436 7.43249Z" fill="white"/>
</svg>
`;
