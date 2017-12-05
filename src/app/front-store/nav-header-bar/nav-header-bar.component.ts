import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../items/categories/categories.service';
declare var $: any
@Component({
  selector: 'app-nav-header-bar',
  templateUrl: './nav-header-bar.component.html',
  styleUrls: ['./nav-header-bar.component.css'],
  providers: [CategoriesService]
})
export class NavHeaderBarComponent implements OnInit {

  categories = []
  errorMsg

  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
    this.setAll()
  }

  setAll() {
    this.categoryService.all().subscribe(
      res => this.categories = res,
      error => this.errorMsg = error
    )
  }

  ngAfterViewInit() {

$('#menu .nav > li > .dropdown-menu-ft').each(function() {
		var menu = $('#menu').offset();
		var dropdown = $(this).parent().offset();

		var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menu').outerWidth());

		if (i > 0) {
			$(this).css('margin-left', '-' + (i + 5) + 'px');
		}
	});

var $screensize = $(window).width();
$('#menu .nav > li, #header .links > ul > li').on("mouseover", function() {
																		
			if ($screensize > 991) {
			$(this).find('> .dropdown-menu-ft').stop(true, true).slideDown('fast');
			}			
			$(this).bind('mouseleave', function() {

			if ($screensize > 991) {
				$(this).find('> .dropdown-menu-ft').stop(true, true).css('display', 'none');
			}
		});});
$('#menu .nav > li div > ul > li').on("mouseover", function() {
			if ($screensize > 991) {
			$(this).find('> div').css('display', 'block');
			}			
			$(this).bind('mouseleave', function() {
			if ($screensize > 991) {
				$(this).find('> div').css('display', 'none');
			}
		});});
$('#menu .nav > li > .dropdown-menu-ft').closest("li").addClass('sub');

// Clearfix for sub Menu column
$( document ).ready(function() {
  $screensize = $(window).width();
    if ($screensize > 1199) {
        $('#menu .nav > li.mega-menu > div > .column:nth-child(6n)').after('<div class="clearfix visible-lg-block"></div>');
    }
    if ($screensize < 1199) {
        $('#menu .nav > li.mega-menu > div > .column:nth-child(4n)').after('<div class="clearfix visible-lg-block visible-md-block"></div>');
  }
});
$( window ).resize(function() {
    $screensize = $(window).width();
    if ($screensize > 1199) {
        $("#menu .nav > li.mega-menu > div .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.mega-menu > div > .column:nth-child(6n)').after('<div class="clearfix visible-lg-block"></div>');
    } 
    if ($screensize < 1199) {
        $("#menu .nav > li.mega-menu > div .clearfix.visible-lg-block").remove();
        $('#menu .nav > li.mega-menu > div > .column:nth-child(4n)').after('<div class="clearfix visible-lg-block visible-md-block"></div>');
    }
});

$('#menu .navbar-header > span').on("click", function() {
  $(this).toggleClass("active");  
  $("#menu .navbar-collapse").slideToggle('medium');
  return false;
});

$('#cat_accordion').cutomAccordion({
  saveState: false,
  autoExpand: true
});

//mobile sub menu plus/mines button
$('#menu .nav > li > div > .column > div, .submenu, #menu .nav > li .dropdown-menu-ft').before('<span class="submore"></span>');

//mobile sub menu click function
$('span.submore').on("click", function() {
$(this).next().slideToggle('fast');
$(this).toggleClass('plus');
return false;
});
//mobile top link click
$('.drop-icon').on("click", function() {
  $('#header .htop').find('.left-top').slideToggle('fast');
  return false;
});

  }

}
