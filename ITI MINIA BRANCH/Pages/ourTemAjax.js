function LoadDataEBusiness() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);


  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "EBusiness") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataGamingCenter() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);


  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "GamingCenter") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataJETS() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "JETS") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataELearning() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "ELearning") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataInfrastructure() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "Infrastructure") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataERP() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "ERP") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataOpenSource() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "OpenSource") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataDigitalArt() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "DigitalArt") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataGIS() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "GIS") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataMechatronics() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "Mechatronics") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataEmbedded() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "Embedded") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataCivilEngineering() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "CivilEngineering") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataQA() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "QA") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}

function LoadDataMiniaStaff() {
  var XHR = new XMLHttpRequest();
  XHR.open("get", "outTeam.json", true);

  XHR.onreadystatechange = function () {
    if (XHR.readyState == 2)
    ;
    else if (XHR.readyState == 3)
    ;
    else if (XHR.readyState == 4 && XHR.status == 200) {
      var ourData = eval('(' + XHR.responseText + ')');

      var getOurTeam = document.getElementById("programStaffContainer");
      var count = 0;

      for (let index = 0; index < ourData.length; index++) {
        if (ourData[index].Person.Departemnt == "MiniaStaff") {
          if (count == 0) {
            getOurTeam.innerHTML =
              `<section class=" col-md-6 col-lg-4" >
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section >
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
            count = 1;
          } else {
            getOurTeam.innerHTML +=
              `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ ourData[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ ourData[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ ourData[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ ourData[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ ourData[index].Person.links }
                                </section>
                               </div>
                             </section>`;
          }
        }
      }
    } else {
      alert("Error");
    }
  };
  XHR.send();
}