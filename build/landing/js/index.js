function playground() {
  var $elems = $('.js-playground');
  var count = $elems.length;

  $elems.find('[data-toggle="tab"]').on('shown.bs.tab', refreshCodeMirrorInTab);

  function setMode(e) {
    e.preventDefault();

    var $pill = $(this);
    var isDark = ($pill.attr('data-set-mode') === 'dark');

    $(this).closest('ul').find('li').removeClass('active');
    $(this).closest('li').addClass('active');
    $(this).closest('.js-playground').find('.tab-content').toggleClass('theme-dark', isDark);
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


    $component.on('click', '.nav-pills a', setMode);

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
      var budicon = $group.attr('data-budicon') || 22;
      var tpl = [
        '<li data-accordion class="'+ ((i === 0) ? 'open' : '') +'"><a class="'+ ((i === 0) ? 'is-current' : '') +'" href="#'+ id +'">',
        '<span class="icon icon-budicon-' + budicon + '"></span>',
        name,
        '</a></li>'
      ].join('');

      var $item = $(tpl);

      if($group.find('h2[id]').length) {
        var $list = $('<ul class="nav"></ul>');

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
    var activeClass = 'active';
    var $section = $(hash + '[data-group]');
    var $subSection = $(hash).closest('[data-group]');
    var $navItem = $('.nav-styleguide a[href="' + hash + '"]');

    if($('[data-group], .nav-styleguide li').length) {
      $('[data-group], .nav-styleguide li').removeClass(activeClass);
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

    $navItem.closest('li').addClass(activeClass);
    $navItem.closest('[data-accordion]').addClass('open');
  }

  build();

  if(location.hash) {
    return setSelected(location.hash);
  }

  return setSelected('#' + $('[data-group]').first().attr('id'));

}


function accordions() {
  $('.nav-styleguide [data-accordion]').accordion({
    controlElement: 'a',
    contentElement: 'ul'
  });
}

function snippets() {
  hljs.configure({
    tabReplace: '  ', // 4 spaces
    classPrefix: ''     // don't append class prefix
                        // … other options aren't changed
  });
  hljs.initHighlighting();

  $('pre.hl code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
}

snippets();


function colors() {
  $('.color [data-hex]').each(function() {
    var color = $(this).closest('.color').css('background-color');

    function toHex(int) {
      var hex = int.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    function parseColor(color) {
      var arr=[]; color.replace(/[\d+\.]+/g, function(v) { arr.push(parseFloat(v)); });
      return {
        hex: "#" + arr.slice(0, 3).map(toHex).join(""),
        opacity: arr.length == 4 ? arr[3] : 1
      };
    }

    $(this).text(parseColor(color).hex);
  });
}

colors();


function splash() {
  if(!location.hash) {
    return $(".lettering-js").lettering();
  }
}

splash();

function version() {
  $.getJSON("/landing/package.json", function(data){
    $("#version").html(data.version)
  });
}

version();

$(window).load(function() {
  
  $("html").addClass('loaded');

  navigation();

  accordions();

});
