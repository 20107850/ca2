function updateViewingImage() {
  const viewing = document.getElementById("viewing").value;
  const img = document.getElementById("viewingImg");
  img.src = `images/${viewing.toLowerCase()}.png`;
  img.alt = `${viewing} preview`;
}

function updateTicketImage() {
  const ticketType = document.getElementById("ticketType").value;
  const img = document.getElementById("ticketImg");
  img.src = `images/${ticketType.toLowerCase()}.png`;
  img.alt = `${ticketType} ticket preview`;
}// JavaScript Document