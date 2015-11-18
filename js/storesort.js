$(document).ready(function(){
            $("#name_asc").click(function(){
                var Sort = $("div.products .product")
                
                var names = [];
                Sort.each(function(){
                    names.push($(this).data("name"));
                })
                names.sort();
                var strHTML = "";
                for(i = 0; i<names.length;i++){
                    var name = names[i];//$(this);
                    for (j = 0; j< Sort.length;j++){
                        if(name === $(Sort[j]).data("name")){
                            strHTML += $(Sort[j]).prop("outerHTML");
                            break;
                        }
                    }
                }
        
                $("div.products").html(strHTML);
                
            });
            $("#name_dec").click(function(){
                var Sort = $("div.products .product")
                
                var names = [];
                Sort.each(function(){
                    names.push($(this).data("name"));
                })
                names.sort();
                names.reverse();
                var strHTML = "";
                for(i = 0; i<names.length;i++){
                    var name = names[i];//$(this);
                    for (j = 0; j< Sort.length;j++){
                        if(name === $(Sort[j]).data("name")){
                            strHTML += $(Sort[j]).prop("outerHTML");
                            break;
                        }
                    }
                }
        
                $("div.products").html(strHTML);
                
            });
        })