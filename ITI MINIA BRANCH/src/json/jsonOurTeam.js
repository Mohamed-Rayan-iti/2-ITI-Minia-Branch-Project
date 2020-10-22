var jsonOurTeamObject = [{
        "Person": {
            "Departemnt": "EBusiness",
            "image": "PersonalImage(0).png",
            "Name": "Ahmed Adel Domairy",
            "Job": "EBusiness Technologies Department Head",
            "links": "<a class='btn'><i class='fab fa-linkedin font-Color'></i></a><a class='btn'><i class='fab fa-github font-Color'></i></a>"
        }
    },
    {
        "Person": {
            "Departemnt": "EBusiness",
            "image": "PersonalImage(1).png",
            "Name": "Basma Salah abd elmonsef",
            "Job": "EBusiness Department Deputy",
            "links": "<a class='btn'><i class='fab fa-facebook font-Color'></i></a><a class='btn'><i class='fab fa-linkedin font-Color'></i></a>"
        }
    },
    {
        "Person": {
            "Departemnt": "EBusiness",
            "image": "PersonalImage(2).png",
            "Name": "Osama Ahmed Hassan",
            "Job": "EBusiness Department Teaching Assistant",
            "links": "<a class='btn'><i class='fab fa-linkedin font-Color'></i></a>"
        }
    },
    {
        "Person": {
            "Departemnt": "EBusiness",
            "image": "PersonalImage(3).png",
            "Name": "Ahmed Zaghloul Hazaa",
            "Job": "EBusiness Department Teaching Assistant",
            "links": "<a class='btn'><i class='fab fa-linkedin font-Color'></i></a><a class='btn'><i class='fab fa-github font-Color'></i></a>"
        }
    },
    {
        "Person": {
            "Departemnt": "EBusiness",
            "image": "PersonalImage(4).png",
            "Name": "Menna Tollah Hassan Shata",
            "Job": "EBusiness Department Teaching Assistant",
            "links": "<a class='btn'><i class='fab fa-facebook font-Color'></i></a><a class='btn'><i class='fab fa-github font-Color'></i></a>"
        }
    },
    {
        "Person": {
            "Departemnt": "EBusiness",
            "image": "PersonalImage(5).png",
            "Name": "Omnia Nour Gad ElRab",
            "Job": "EBusiness Department Teaching Assistant",
            "links": "<a class='btn'><i class='fab fa-linkedin font-Color'></i></a>"
        }
    }
]

var getOurTeam = document.getElementById("programStaffContainer");

function getOurTeamData() {

    for (let index = 0; index < jsonOurTeamObject.length; index++) {
        getOurTeam.innerHTML +=
            `<section class=" col-md-6 col-lg-4">
                               <div class="img-thumbnail rounded border border-info text-center mb-2 our-team-person-info">
                                 <section>
                                    <img src="../src/img/Persons/${ jsonOurTeamObject[index].Person.image }"
                                         class="w-50 m-2 rounded-circle" alt="${ jsonOurTeamObject[index].Person.Name }">
                                      <p class="mt-2 mb-0">
                                        <strong>
                                          ${ jsonOurTeamObject[index].Person.Name }
                                        </strong>
                                      </p>
                                      <p class="mb-2">
                                        <small>
                                         <strong>
                                          ${ jsonOurTeamObject[index].Person.Job }
                                         </strong>
                                        </small>
                                      </p>
                                 </section>
                                  <hr class="m-0">
                                <section class="p-0">
                                  ${ jsonOurTeamObject[index].Person.links }
                                </section>
                               </div>
                             </section>`;
    }
};