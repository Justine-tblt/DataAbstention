// SCRIPT GLOBAL


// afficher les remarques de la carte
  document.getElementById('comments-button').addEventListener('click', function() {
    const comments = document.getElementById('comments');
    if (comments.style.display === 'none' || comments.style.display === '') {
        comments.style.display = 'flex';
    } else {
        comments.style.display = 'none';
    }
});


// apparition au défilement
const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
};

const handleIntersect = function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.intersectionRatio > ratio) {
            if (entry.target.classList.contains('reveal-left')) {
                entry.target.classList.add('reveal-left-visible');
            } else if (entry.target.classList.contains('reveal-right')) {
                entry.target.classList.add('reveal-right-visible');
            } else if (entry.target.classList.contains('reveal-bottom')) {
                entry.target.classList.add('reveal-bottom-visible');
            }
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r);
});
