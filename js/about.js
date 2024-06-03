document.addEventListener('DOMContentLoaded', function() {
    const visionButton = document.getElementById('vision-btn');
    const visionParagraph = document.getElementById('vision-paragraph');

    const missionButton = document.getElementById('mission-btn');
    const missionParagraph = document.getElementById('mission-paragraph');

    const valuesButton = document.getElementById('values-btn');
    const valuesParagraph = document.getElementById('values-paragraph');

    visionButton.addEventListener('click', function() {
        toggleParagraph(visionParagraph);
    });

    missionButton.addEventListener('click', function() {
        toggleParagraph(missionParagraph);
    });

    valuesButton.addEventListener('click', function() {
        toggleParagraph(valuesParagraph);
    });

    function toggleParagraph(paragraph) {
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
        } else {
            paragraph.style.display = 'none';
        }
    }
});
