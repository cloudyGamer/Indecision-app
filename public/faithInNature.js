/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

console.log("js script successfully detected");
  
     var jQueryScript = document.createElement('script'); jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'); document.head.appendChild(jQueryScript);
////////////////////////////////////////
//working  code
var name  = $('#lblName').text(); 
var otherVar  =  $("#imgProductEnlarge").attr('src');    
$("#breadcrumbs").after("<a  id='downloadScrape' download='"+name+"' href='"+otherVar+"'>Click me bro</a>");
document.getElementById('downloadScrape').click();
var directions =  $('#lblDescription > ul ~ p').text(); 
var description = $('#lblDescription > p:nth-of-type(1)').text();  
console.log(description);
//var ingredients =  $("div.panel div:contains('INGREDIENTS:')").text();

jQuery.expr[':'].icontains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

//var ingredients =  $("div.panel div:icontains('INGREDIENTS:')").text();
var ingredients = $("#lblIngredients").text();
console.log(name);
console.log(ingredients);

var tabs = "<div id='tabs'><ul><li><a href='#tabs-1'>Description</a></li><li><a href='#tabs-2'>Directions</a></li><li><a href='#tabs-3'>Ingredients</a></li>\n\
</ul><div id='tabs-1'><meta charset='utf-8' /><p>"+description+"</p>\n\
</div><div id='tabs-2'><meta charset='utf-8' /><p>"+directions+"</p></div><div id='tabs-3'><meta charset='utf-8' /><p>"+ingredients+"</p></div></div>";

console.log(tabs);

        
