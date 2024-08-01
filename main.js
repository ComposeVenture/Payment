APPMODE('','','green');

DISPLAY('',`

    <div class='HomeDiv'>

        <img class='AppLogo' src='./Images/invest.jpg'/>

        <div class='MessagingDiv'>

            <h3>Money Building</h3>

            <p>Your Money Growing Platform</p>
       
       </div>

       <div class='Image'>

            <img class='Invest2' src='./Images/bs.png'/>
       
       </div>

       <p class='SimpleMessage'>Increase Your Earning Today With Us</p>

       <button class='forestgreen'>Invest Now</button>

       <div  class='relativediv'>

            <h1>About Us</h1>

            <p>We are a investiment platform that is aimed to double your income house hold and return profits to you and add value to your money.</p>
            <p>Lacer Fund Uses your money in real estate investiment and we grantee you a return investiment of 7% on your money and withdrawal of your money takes only 24 hours of working days that is a income gross rate and non taxable capital in your pocket </p>

            <div class='divholder'>

                <p class='Floaters'>Packages</p>

                <p class='Floaters'>Withdrawal<p>

                <p class='Floaters'>Balance<p>
            
            </div>

            <h1 class='Floaters'>Get Started</h1>

            <p>To Start Invseting With Us Today,Create An Account Inorder to Keep Track OF Your Invsestiments and returns for a better profit</p>

            <div class='divholder'>

                <p id='Login' class='Floaters'>Login<p>

                <p id='CreateAccount' class='Floaters'>Create Account</p>
             
            </div>

            <h3>COntact Us Today</h3>

            <p>For More Inquiries Please Contact Us Via </p>

            <div class='divholder'>

                <p class='Floaters'>Email</p>

                <p class='Floaters'>WhatsApp<p>

                <p class='Floaters'>FaceBook<p>
            
            </div>

            <p>@  Lacer Fund 2024</p>
       
       </div>

    </div>

    <header>

        <h1 class='AppName'>LacerFund</h1>

        <img id='MenuIcon'  class='RightedIcon' src='./WhiteIcons/menu.png'/>
    
    </header>

    <div class='MenuDiv'></div>

`);

CLICKED('#MenuIcon',()=>{

    if (localStorage.getItem('Menu')) {

        DELETESTORAGE('local','Menu');

        DECLARATION('.MenuDiv',(ELEMENT)=>{

            STYLED(ELEMENT,'display','none')

        })
        
    } else {

        STORE('local','Menu','ON');
        
        DECLARATION('.MenuDiv',(ELEMENT)=>{

            STYLED(ELEMENT,'display','block');

            DISPLAY(ELEMENT,`

                <p class='LeftedText'>Stock Market </p>

                <p class='LeftedText'>Trending </p>
                
                <p class='LeftedText'>My Account</p>

                <p class='LeftedText'>Packages</p>

                <p class='LeftedText'>About Us</p>

                <p class='LeftedText'>Privacy Policy</p>

                <p class='LeftedText'>Contacts Us</p>

            `);

        })

    }


});


CLICKED('#Login',()=>{

    DISPLAY('',`

        <img class='AppLogo1' src='./Images/bs.png'/>

        <div>

            <h1>Lacer Fund</h1>

            <p>Start Investing Today By Loging Into Your Account</p>

            <input type='email' placeholder='Enter Email' >

            <input type='password' placeholder='Enter Password' >

            <button class='forestgreen'>LogIn</button>

            <button id='Reload' class='teal'>Back</button>
        
        </div>

    `);

    CLICKED('#Reload',()=>{
        location.href=('./index.html');
    })

})

CLICKED('#CreateAccount',()=>{

    DISPLAY('',`

        <img class='AppLogo1' src='./Images/bs.png'/>

        <div>

            <h1>Lacer Fund</h1>

            <p>Start Investing Today By Loging Into Your Account</p>

            <input type='text' placeholder='Enter User Name' >

            <input type='email' placeholder='Enter Email' >

            <input type='password' placeholder='Enter Password' >

            <button class='forestgreen'>Create Account</button>

            <button id='Reload' class='teal'>Back</button>
        
        </div>
        
    `);

    CLICKED('#Reload',()=>{
        location.href=('./index.html');
    })

})
