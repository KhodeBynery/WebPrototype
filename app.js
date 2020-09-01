function allowDrop(ev)
{
    ev.preventDefault();
}

function dragStart(ev)
{
    id=ev.target.id;
    alert(id);
}