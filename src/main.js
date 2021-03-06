import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamago } from "./tamagotchi.js";

function showStats (tamago) {
  $("#hunger h3").text(tamago.hunger);
  $("#happiness h3").text(tamago.happiness);
  $("#energy h3").text(tamago.energy);
  $("#bathroom h3").text(tamago.bathroom);
}

function checkNormal (tamago) {
  $(".tamago-gif").hide();
  if (tamago.alive === false) {
    $("#die").show();
    $(".buttons").hide();
    $("#stats").hide();
    $("#reset").show();
  } else if (tamago.sick === true) {
    $("#sick").show();
  } else if (tamago.pooped > 0) {
    $("#poop").show();
  } else {
    $("#normal").show();
  }
}

function wait (tamago) {
  setTimeout(function() {
    $(".tamago-gif").hide();
    checkNormal(tamago);
  }, 2000);
}

$(document).ready(function () {
  let tamago  = new Tamago();
  $("#egg").show();
  setTimeout(function() {
    $(".tamago-gif").hide();
    $("#normal").show();
  }, 5000);
  showStats(tamago);

  setInterval(function () {
    tamago.timetick();
    showStats(tamago);
    checkNormal(tamago);
  }, 5000);

  $("#feed").click(function () {
    $(".tamago-gif").hide();
    $("#eat").show();
    wait(tamago);
    tamago.feed();
    showStats(tamago);
  });

  $("#play").click(function () {
    $(".tamago-gif").hide();
    $("#happy").show();
    wait(tamago);
    tamago.play();
    showStats(tamago);
  });

  $("#sleep").click(function () {
    $(".tamago-gif").hide();
    $("#sleeping").show();
    wait(tamago);
    tamago.sleep();
    showStats(tamago);
  });

  $("#clean").click(function () {
    tamago.clean();
    checkNormal(tamago);
    showStats(tamago);
  });

  $("#reset").click(function () {
    location.reload();
  });
});
