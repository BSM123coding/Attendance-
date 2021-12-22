student_name_array = [];
function submit()
{
    var display_student_name_array=[];
    for (var j = 1; j<=4; j++)
    {
        var name_of_the_student= document.getElementById("name_of_the_student_"+j).value;
        student_name_array.push(name_of_the_student);
    }
    for(var k = 0; k<student_name_array.length; k++)
    {
        display_student_name_array.push("name-"+student_name_array[k]+"<br>");
    }
document.getElementById("display_name_with_commas").innerHTML=display_student_name_array;
document.getElementById("display_name_without_commas").innerHTML=display_student_name_array.join(" ");
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block"
}
function sorting()
{
    var sorted_student_array=[];
    student_name_array.sort();
    for (var k = 0; k<student_name_array.length; k++)
    {
sorted_student_array.push("name:"+student_name_array[k]+"<br>");
    }
    document.getElementById("display_name_without_commas").innerHTML=sorted_student_array.join(" ");
}