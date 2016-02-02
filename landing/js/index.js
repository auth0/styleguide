


function playground() {
  var $elems = $('.js-playground');
  var count = $elems.length;

  $elems.find('[data-toggle="tab"]').on('shown.bs.tab', refreshCodeMirrorInTab);

  function setMode() {

  }

  function refreshCodeMirrorInTab(e) {
    var $elem = $($(this).attr('href')).find('.CodeMirror');

    if(!$elem.length) {
      return;
    };

    $elem.get(0).CodeMirror.refresh();
  }

  function stripIndent(str) {
  	var match = str.match(/^[ \t]*(?=\S)/gm);

  	if (!match) {
  		return str;
  	}

  	var indent = Math.min.apply(Math, match.map(function (el) {
  		return el.length;
  	}));

  	var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');

  	return indent > 0 ? str.replace(re, '') : str;
  }

  $elems.each(function(i) {
    var $component = $(this);

    if(!$component.attr('data-src')) {
      return;
    }

    var path = $component.attr('data-src');

    var $canvas = $component.find('.playground-canvas');
    var $html = $component.find('[data-lang="html"] textarea');

    $html.val(stripIndent($canvas.html()));

    $.get(path + '.jade', function(contents) {
      var $jade = $component.find('[data-lang="jade"] textarea');

      $jade.val(contents);

      CodeMirror.fromTextArea($jade.get(0), {
        lineNumbers: true,
        readOnly: true,
        theme: 'auth0',
        mode: 'jade'
      });

      CodeMirror.fromTextArea($html.get(0), {
        lineNumbers: true,
        readOnly: true,
        theme: 'auth0',
        mode: 'text/html'
      });
    });
  });
}

playground();


function navigation() {
  $(window).on('hashchange', setSelected);

  function build() {
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

    if($('[data-group], .nav-styleguide a').length) {
      $('[data-group], .nav-styleguide a').removeClass(activeClass);
    }

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

  build();

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
