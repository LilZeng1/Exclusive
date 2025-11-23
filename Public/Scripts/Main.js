let lang = 'tr';

document.addEventListener('DOMContentLoaded', () => {
    // Language selector
    const langButtons = document.querySelectorAll('.language-selector button');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            lang = btn.dataset.lang;
            translateAll();
        });
    });

    function translateAll() {
        // Subtitle with typing
        const subtitle = document.querySelector('.subtitle');
        subtitle.innerHTML = '';
        const text = subtitle.dataset[lang];
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.innerText = '|';
        subtitle.appendChild(cursor);
        let i = 0;
        function type() {
            if (i < text.length) {
                cursor.insertAdjacentText('beforebegin', text[i]);
                i++;
                setTimeout(type, 50);
            }
        }
        type();

        // Cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            // dataset isimlerini dinamik olarak alıyoruz
            const titleKey = `title${lang.charAt(0).toUpperCase() + lang.slice(1)}`;
            const descKey = `desc${lang.charAt(0).toUpperCase() + lang.slice(1)}`;
            card.querySelector('h3').innerText = card.dataset[titleKey];
            card.querySelector('p').innerText = card.dataset[descKey];
        });

        // Contact
        const contactH3 = document.querySelector('.contact h3');
        contactH3.innerText = contactH3.dataset[lang];
    }

    translateAll();
});
