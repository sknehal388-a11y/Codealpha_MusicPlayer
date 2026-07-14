*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:linear-gradient(135deg,#4b6cb7,#182848);
display:flex;
justify-content:center;
align-items:center;
min-height:100vh;
}

.container{
width:100%;
display:flex;
justify-content:center;
padding:20px;
}

.player{
width:400px;
background:white;
padding:25px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,.3);
text-align:center;
}

.player img{
width:250px;
height:250px;
object-fit:cover;
border-radius:15px;
margin-bottom:20px;
}

.player h2{
margin-bottom:5px;
}

.player h4{
color:gray;
margin-bottom:20px;
}

#progress{
width:100%;
margin-top:15px;
cursor:pointer;
}

.time{
display:flex;
justify-content:space-between;
margin-top:5px;
margin-bottom:20px;
font-size:14px;
}

.controls{
display:flex;
justify-content:center;
gap:20px;
margin-bottom:20px;
}

.controls button{
width:60px;
height:60px;
border:none;
border-radius:50%;
background:#4b6cb7;
color:white;
font-size:22px;
cursor:pointer;
transition:.3s;
}

.controls button:hover{
transform:scale(1.1);
background:#182848;
}

.volume{
display:flex;
align-items:center;
gap:10px;
margin-bottom:20px;
}

.volume input{
flex:1;
}

.playlist{
margin-top:15px;
text-align:left;
}

.playlist h3{
margin-bottom:10px;
}

.playlist ul{
list-style:none;
max-height:150px;
overflow-y:auto;
}

.playlist li{
padding:10px;
border-bottom:1px solid #ddd;
cursor:pointer;
transition:.3s;
}

.playlist li:hover{
background:#4b6cb7;
color:white;
}

@media(max-width:500px){

.player{
width:100%;
}

.player img{
width:220px;
height:220px;
}

}
