var id;
function allowDrop(ev)
{
    ev.preventDefault();
}

function dragStart(ev)
{
    id=ev.target.id;
    // alert(id);
}

function drop(ev)
{
    ev.target.append(document.getElementById(id));
}

object.onclick = function(){myScript};
object.addEventListener("click", myScript);