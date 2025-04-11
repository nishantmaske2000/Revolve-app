import React from 'react'
import './program.css'

function Program() {
  return (
    <div>
      {/* <!-- ============Banner Start=========================================== --> */}

<div className="pg_content2">
    <h1>Our Programs</h1>
     <p>If you follow the right workout routine, you will get<br/>
        exactly what you need.</p>
</div>

<div className="p1">
   <br/><h1>Our Programs</h1><br/>
    <p>Whether you want to build muscle or completely transform your body, if<br/> you follow the right workout routine, you will get exactly what you need.</p>
</div>

{/* <!-- ============Banner End=========================================== --> */}

{/* <!-- =======================Main Content Start=========================================== --> */}


<div className="card_container">
    <div className="card">
        <img src="/images/1.3.jpeg" width="100%"/>
        <h3>Cardio Exercise</h3>
        <p>Cardio training involves exercising at a
            constant moderate level of intensity</p>

    </div>
    <div className="card">
        <img src="/images/a1.png"/>
        <h3>Fitness Training</h3>
        <p>Strength training can help you in bone and
            muscle. It can help you lose weight.</p>
    </div>

    <div className="card">
        <img src="/images/a2.png"/>
        <h3>Cardio Training</h3>
        <p>When you’re bringing your body to yoga position be mindful and kind.</p>
    </div>

    <div className="card">
        <img src="/images/a3.png"/>
        <h3>Weight Lift</h3>
        <p>Weight Lifting helps you to tear muscle make your bone strong.</p>
    </div>

    <div className="card">
        <img src="/images/a4.png"/>
        <h3>Outdoor Games</h3>
        <p>We conduct regualr outdoor games for our members for their fitness.</p>
    </div>

    <div className="card">
        <img src="/images/a5.png"/>
        <h3>Meditation</h3>
        <p>Mental health is more important than your physical body to be healthy.</p>
    </div>
</div>
   
{/* <script>

    $(document).ready(function () {

        $('.buttons').click(function () {

            $(this).addClass('active').siblings().removeClass('active');

            var filter = $(this).attr('data-filter')

            if (filter == 'all') {
                $('.image').show(400);
            } else {
                $('.image').not('.' + filter).hide(200);
                $('.image').filter('.' + filter).show(400);
            }

        });

        $('.gallery').magnificPopup({

            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }

        });

    });

</script> */}
    </div>
  )
}

export default Program
