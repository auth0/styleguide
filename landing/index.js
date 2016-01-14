function navigation() {
  $(window).on('hashchange', setSelected);

  function buildNav() {
    var $nav = $('.nav-styleguide ul');

    $nav.html('');

    $('[data-group]').each(function(i) {
      var $group = $(this);
      var name = $group.attr('data-group');
      var id = $group.attr('id');
      var tpl = [
        '<li data-accordion class="'+ ((i === 0) ? 'open' : '') +'"><a class="'+ ((i === 0) ? 'is-current' : '') +'" href="#'+ id +'">',
        name,
        '</a></li>'
      ].join('');

      var $item = $(tpl);

      if($group.find('h2[id]').length) {
        var $list = $('<ul></ul>');

        $group.find('h2[id]').each(function(i) {
          var name = $(this).text();
          var id = $(this).attr('id') || 'foo';

          $list.append('<li><a href="#'+ id + '">' + name + '</li>');

          $item.append($list);
        });
      }

      return $nav.append($item);
    });
  }

  function setSelected(hash) {
    var hash = location.hash || hash;
    var activeClass = 'is-current';
    var $section = $(hash + '[data-group]');
    var $subSection = $(hash).closest('[data-group]');
    var $navItem = $('.nav-styleguide a[href="' + hash + '"]');

    $('[data-group], .nav-styleguide a').removeClass(activeClass);

    $('#menu').collapse('hide');

    if(hash.length) {
      $('[data-accordion]').removeClass('open');
    }

    if($section.length) {
      $section.addClass(activeClass);

      $(window).scrollTop(0);
    } else if ($subSection.length) {
      $subSection.addClass(activeClass);
    }

    $navItem.addClass(activeClass);
    $navItem.closest('[data-accordion]').addClass('open');
  }

  buildNav();
  setSelected(location.hash);
}

navigation();

function accordions() {
  $('.nav-styleguide [data-accordion]').accordion({
    controlElement: 'a',
    contentElement: 'ul'
  });
}

accordions();

function playground() {
  var $module = $('.js-playground');
};

playground();
