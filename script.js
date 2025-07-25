const bands = [
      'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
      'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
      'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
      'Anywhere But Here', 'An Old Dog'
    ];
    function stripArticle(name) {
      return name.replace(/^(a |an |the )/i, '').trim();
    }
    const sortedBands = bands.sort((a, b) => {
      return stripArticle(a).localeCompare(stripArticle(b));
    });

    const ul = document.getElementById('bands');
    ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
