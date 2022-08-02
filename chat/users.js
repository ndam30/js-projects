var searchBar = document.querySelector(".users .search input"),
srchbtn = document.querySelector(".users .search button");

srchbtn.onclick =() =>{
	searchBar.classList.toggle("active")
	searchBar.focus();
	srchbtn.classList.toggle("active")
}