(this["webpackJsonpfrontend-server"]=this["webpackJsonpfrontend-server"]||[]).push([[0],{32:function(e,t,a){e.exports=a(49)},37:function(e,t,a){},38:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(17),i=a.n(c),r=(a(37),a(2)),s=a(6),l=a(4),u=a(3),d=(a(38),a(12)),h=a(5),m=function(e){return o.a.createElement("a",{href:e.redirect,onClick:function(){"Log Out"===e.pageName&&sessionStorage.removeItem("user")}},o.a.createElement("div",{id:e.id,className:"button"},e.pageName))},p=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"left-header"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{id:"logo",src:"placeholder_logo.png",alt:"Link is Broken"}))),o.a.createElement("div",{id:"middle-header"},e.goBackHome),o.a.createElement("div",{id:"right-header"},o.a.createElement(m,{redirect:e.redirect,pageName:e.pageName})))},f=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"left-footer"}),o.a.createElement("div",{id:"middle-footer"},o.a.createElement("p",null,e.copyright," \xa9")),o.a.createElement("div",{id:"right-footer"}))},g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={copyright:"Copyright Dery Germann 2020"},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"pageContent"},o.a.createElement("div",{id:"header"},o.a.createElement(p,{redirect:"signup",pageName:"Sign Up",goBackhome:""})),o.a.createElement("div",{id:"content"},o.a.createElement("div",{id:"brief-overview"},o.a.createElement("h1",{id:"home-page-header"},"Overview"),o.a.createElement("p",{id:"home-page-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo, leo sit amet ullamcorper egestas, arcu nibh tristique augue, ut fermentum dui risus vitae turpis. Aliquam a condimentum eros. Donec tortor ipsum, iaculis vel rhoncus ut, vehicula ac orci. Fusce dictum, augue vel feugiat hendrerit, risus mi convallis dui, viverra tempus massa lectus vitae erat. Aenean turpis metus, tincidunt et scelerisque sit amet, suscipit ac erat. Curabitur auctor facilisis convallis. Nulla dignissim fringilla urna, vitae lobortis neque fringilla sed. Mauris non leo eget enim gravida feugiat vestibulum at nisl. Cras quis luctus elit, eu tristique diam. In metus diam, tincidunt sit amet enim vel, lobortis volutpat lacus. Proin eget viverra felis, nec tempor nisl. Donec tempor rhoncus euismod.")),o.a.createElement("div",{id:"home-page-button"},o.a.createElement(m,{redirect:"public",pageName:"Start Browsing Jigsaw Puzzles"}))),o.a.createElement("div",{id:"footer"},o.a.createElement(f,{copyright:this.state.copyright})))}}]),a}(n.Component),b=a(1),E=a(27),v=a.n(E),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){fetch("http://localhost:3001/accounts/listall?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return n.setState({users:e})})).catch((function(e){return console.log(e)}))},n.responseGoogle=function(e){var t;if(console.log(e),n.state.users.forEach((function(a){a.email===e.profileObj.email?(n.setState({isNewUser:!1}),t=a):t=a})),n.state.isNewUser){var a=e.profileObj.name.split(" "),o=e.profileObj.email;fetch("http://localhost:3001/accounts?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"firstName=".concat(a[0],"&lastName=").concat(a[1],"&email=").concat(o)}).then((function(e){return e.json()})).then((function(e){return sessionStorage.setItem("user",JSON.stringify(e))})).then(n.setState({redirect:!0})).catch((function(e){return console.log(e)}))}else n.setState({redirect:!0},(function(){sessionStorage.setItem("user",JSON.stringify(t))}))},n.state={copyright:"Copyright Dery Germann 2020",gbh:o.a.createElement("a",{href:"/",id:"go-back-home-button"},o.a.createElement("p",null,"\u2190 Go Back Home")),users:[],isNewUser:!0,redirect:!1},n.responseGoogle=n.responseGoogle.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e=o.a.createElement("h1",null,"Log In"),t=o.a.createElement(v.a,{clientId:"301198402381-q3tdlo01usj267dlq1anlejh2oj2qcav.apps.googleusercontent.com",buttonText:"Login Using Google",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"});return(this.state.redirect||sessionStorage.getItem("user"))&&(e=o.a.createElement("a",{href:"account"},o.a.createElement("u",null,o.a.createElement("h1",null,"Visit Your Account Page"))),t=o.a.createElement("p",null)),o.a.createElement("div",{id:"pageContent"},o.a.createElement("div",{id:"header"},o.a.createElement(p,{redirect:"signup",pageName:"Log In",goBackHome:this.state.gbh})),o.a.createElement("div",{id:"content"},o.a.createElement("div",{id:"sign-up"},e,t)),o.a.createElement("div",{id:"footer"},o.a.createElement(f,{copyright:this.state.copyright})))}}]),a}(n.Component),w=function(e){var t=[{image:e.image,name:e.name}];return o.a.createElement("div",{id:"small-puzzle-view"},o.a.createElement(d.b,{className:"link",to:{pathname:"/puzzle",data:t}},o.a.createElement("img",{src:e.image,alt:"Link is Broken"})),o.a.createElement("span",{className:"tag_holder"},e.tags),o.a.createElement("span",{className:"tag_holder"},e.puzzleId),o.a.createElement("h2",{className:"small-puzzle-view title"},e.name))},z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={copyright:"Copyright Dery Germann 2020",gbh:o.a.createElement("a",{href:"/",id:"go-back-home-button"},o.a.createElement("p",null,"\u2190 Go Back Home")),public_info:[],searchValue:""},n.updateSearchValue=n.updateSearchValue.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getPublicData()}},{key:"test_populate",value:function(){for(var e=[],t=1;t<11;t++){var a={};a.image="./test_images/image".concat(t,".png"),a.tags="#cool #reallycool #supercool",a.title="Test Image ".concat(t),e.push(a)}this.setState({public_info:e})}},{key:"getPublicData",value:function(){var e=this;fetch("http://localhost:3001/getdata?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({public_info:t.public})})).catch((function(e){return console.log(e)}))}},{key:"updateSearchValue",value:function(e){this.setState({searchValue:e.target.value}),console.log(this.state.searchValue)}},{key:"render",value:function(){return o.a.createElement("div",{id:"pageContent"},o.a.createElement("div",{id:"header"},o.a.createElement(p,{redirect:"signup",pageName:"Sign Up",goBackHome:this.state.gbh})),o.a.createElement("div",{id:"content"},o.a.createElement("h1",null,"Public Jigsaw Puzzles"),o.a.createElement("p",null,"This page contains puzzles that users have chosen to make public for anyone to enjoy!"),o.a.createElement("label",{htmlFor:"searchValue"},"Search For Puzzles: "),o.a.createElement("input",{type:"text",onChange:this.updateSearchValue,id:"searchValue",name:"searchValue"}),o.a.createElement("div",{id:"public-content-holder"},this.state.public_info.map((function(e,t){return o.a.createElement(w,{key:t,puzzleId:e.puzzle_id,image:e.image,tags:e.tags,name:e.name})}))),o.a.createElement("div",{id:"home-page-button"},o.a.createElement(m,{id:"important_button",redirect:"signup",pageName:"Sign Up to Start Creating Puzzles Now!"}))),o.a.createElement("div",{id:"footer"},o.a.createElement(f,{copyright:this.state.copyright})))}}]),a}(n.Component),k=a(10),_=a.n(k),S=a(30),N=a(22),C=a(15),O=function(e){return o.a.createElement(o.a.Fragment,null,e.friends.map((function(e,t){return o.a.createElement("div",{key:t,className:"friends"},o.a.createElement("h3",null,e))})))},j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).showImagePreview=function(e){n.setState({imagePreview:URL.createObjectURL(e.target.files[0])},Object(C.a)(_.a.mark((function e(){var t,a,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.createElement("img")).src=n.state.imagePreview,a=0,o=0,t.onload=function(){a=t.width,o=t.height;var e=document.createElement("canvas"),c=e.getContext("2d");e.width=a,e.height=o,c.drawImage(t,0,0),n.setState({new_image:encodeURIComponent(e.toDataURL())})};case 5:case"end":return e.stop()}}),e)}))))},n.onNameChange=function(e){n.setState({new_name:e.target.value})},n.onTagChange=function(e){n.setState({new_tags:e.target.value})},n.submitData=function(e){n.setState({refresh:!n.state.refresh},(function(){console.log(n.state.refresh)})),""!==n.state.new_name&&""!==n.state.new_image?fetch("http://localhost:3001/puzzles?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"account_id=".concat(n.props.accountId,"&personal_puzzle.name=").concat(n.state.new_name,"&personal_puzzle.tags=").concat(n.state.new_tags,"&personal_puzzle.image=").concat(n.state.new_image)}).then((function(e){return console.log(e.json())})):console.log("missing content")},n.state={new_image:"",new_name:"",new_tags:"",imagePreview:"placeholder_image.png",refresh:!1},n.submitData=n.submitData.bind(Object(b.a)(n)),n.showImagePreview=n.showImagePreview.bind(Object(b.a)(n)),n.onNameChange=n.onNameChange.bind(Object(b.a)(n)),n.onTagChange=n.onTagChange.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.show?"upload-modal upload-display-block":"upload-modal upload-display-none";return this.state.refresh?o.a.createElement(h.a,{to:"/account"}):o.a.createElement("div",{className:e},o.a.createElement("section",{className:"modal-main"},o.a.createElement("span",{className:"close-button topright",onClick:this.props.handleClose.bind(this)},"\xd7"),o.a.createElement("form",{id:"upload-form"},o.a.createElement("div",{id:"form-image"},o.a.createElement("label",null,"Image"),o.a.createElement("img",{src:this.state.imagePreview,alt:"No Image Uploaded Yet"}),o.a.createElement("input",{type:"file",name:"image",accept:"image/*",onChange:this.showImagePreview})),o.a.createElement("div",{id:"form-content"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",name:"name",id:"name",value:this.state.new_name,onChange:this.onNameChange}),o.a.createElement("label",{htmlFor:"tags"},"Image Tags"),o.a.createElement("input",{type:"text",name:"tags",id:"tags",value:this.state.new_tags,onChange:this.onTagChange}),o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement("p",{style:{fontSize:"10pt"}},'Example: "cute sleepy dog nighttime"'),o.a.createElement("p",{style:{color:"red"}},"DISCLAIMER:"),o.a.createElement("p",{style:{fontSize:"10pt"}},o.a.createElement("em",null,o.a.createElement("strong",null,"Image Tags")," are a way for friends/other users to easily find related images."),o.a.createElement("br",null),o.a.createElement("em",null,o.a.createElement("strong",null,"Images"),' need to be ".PNG" or ".JPG" or ".JPEG" to upload.'))),o.a.createElement("br",null),o.a.createElement("div",{className:"button",onClick:this.submitData},"Submit")))))}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={refresh:!1},n.deletePuzzle=n.deletePuzzle.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"deletePuzzle",value:function(){var e=this.props.id,t=this.props.name.replace(" ","%20").replace(/\+/g,"%2B"),a=this.props.puzzle_id;fetch("http://localhost:3001/puzzles/".concat(e,"/personal/").concat(t,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495&imageId=").concat(a),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.props.shared?fetch("http://localhost:3001/puzzles/".concat(e,"/shared/").concat(t,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495&imageId=").concat(a),{method:"DELETE"}).then((function(e){return console.log(e)})).then(this.setState({refresh:!0})):this.setState({refresh:!0})}},{key:"render",value:function(){var e=this.props.show?"delete-modal delete-display-block":"delete-modal delete-display-none";return o.a.createElement("div",{className:e},o.a.createElement("section",{className:"modal-main"},o.a.createElement("span",{className:"close-button topright",onClick:this.props.handleClose.bind(this)},"\xd7"),o.a.createElement("h2",null,"Delete Me?"),o.a.createElement("div",{id:"delete-view"},o.a.createElement("div",{id:"puzzle-view"},o.a.createElement("img",{src:this.props.image,alt:"Link is Broken"}),o.a.createElement("h2",{className:"small-puzzle-view title"},this.props.name)),o.a.createElement("div",{id:"sharing-view"},o.a.createElement("input",{id:"update-share",type:"submit",value:"Yes",onClick:this.deletePuzzle}),o.a.createElement("div",{id:"update-share",onClick:this.props.handleClose.bind(this)},"No")))))}}]),a}(n.Component),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).showDelModal=function(e){n.setState({showDeleteModal:!0})},n.hideDelModal=function(e){n.setState({showDeleteModal:!1})},n.refreshPage=function(e){n.setState({refresh:!0})},n.sharePublic=function(e){n.setState({public:!n.state.public},(function(){n.state.public?(fetch("http://localhost:3001/public-puzzles?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"puzzle_id=".concat(n.props.puzzle_id,"&image=").concat(encodeURIComponent(n.props.image),"&tags=").concat(n.props.tags,"&name=").concat(n.props.name)}).then((function(e){return console.log(e)})),n.state.friend?fetch("http://localhost:3001/puzzles/".concat(n.props.id,"/").concat(n.props.puzzle_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"personal_puzzle.status=Both"}).then((function(e){return console.log(e)})):fetch("http://localhost:3001/puzzles/".concat(n.props.id,"/").concat(n.props.puzzle_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"personal_puzzle.status=Public"}).then((function(e){return console.log(e)}))):(fetch("http://localhost:3001/public-puzzles/".concat(n.props.puzzle_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),n.state.friend?fetch("http://localhost:3001/puzzles/".concat(n.props.id,"/").concat(n.props.puzzle_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"personal_puzzle.status=Shared"}).then((function(e){return console.log(e)})):fetch("http://localhost:3001/puzzles/".concat(n.props.id,"/").concat(n.props.puzzle_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"personal_puzzle.status=Personal"}).then((function(e){return console.log(e)}))),n.updateShareState()}))},n.shareFriend=function(e){n.setState({friend:!n.state.friend},(function(){n.state.friend?(n.props.friend_list.forEach((function(e){fetch("http://localhost:3001/puzzles?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"account_id=".concat(e,"&personal_puzzle.status=Shared&shared_puzzle.image=").concat(encodeURIComponent(n.props.image),"&shared_puzzle.tags=").concat(n.props.tags,"&shared_puzzle.name=").concat(n.props.name)}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))})),fetch("http://localhost:3001/puzzles/".concat(n.props.id,"/").concat(n.props.puzzle_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"personal_puzzle.status=Shared"}).then((function(e){return console.log(e)}))):(n.props.friend_list.forEach((function(e){fetch("http://localhost:3001/puzzles/".concat(e,"/shared/").concat(n.props.name,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))})),n.state.public?fetch("http://localhost:3001/puzzles/".concat(n.props.id,"/").concat(n.props.puzzle_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"personal_puzzle.status=Public"}).then((function(e){return console.log(e)})):fetch("http://localhost:3001/puzzles/".concat(n.props.id,"/").concat(n.props.puzzle_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"personal_puzzle.status=Personal"}).then((function(e){return console.log(e)}))),n.updateShareState()}))},n.updateShareState=function(){n.state.public&&n.state.friend&&fetch("http://localhost:3001/puzzles/".concat(n.props.id,"/").concat(n.props.puzzle_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"personal_puzzle.status=Both"}).then((function(e){return console.log(e)}))},n.state={showDeleteModal:!1,refresh:!1,public:n.props.publicallyShared,friend:n.props.friendsShared},n.sharePublic=n.sharePublic.bind(Object(b.a)(n)),n.shareFriend=n.shareFriend.bind(Object(b.a)(n)),n.updateShareState=n.updateShareState.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e,t,a,n,c=this;this.props.neither?(a=o.a.createElement("p",null,o.a.createElement("strong",null,"This is a shared puzzle.")),e=o.a.createElement("input",{disabled:!0,type:"checkbox",id:"publicShare",name:"publicShare",value:"Public",defaultChecked:this.state.public}),t=o.a.createElement("input",{disabled:!0,type:"checkbox",id:"friendShare",name:"friendShare",value:"Shared",defaultChecked:this.state.friend})):(e=o.a.createElement("input",{type:"checkbox",id:"publicShare",name:"publicShare",value:"Public",checked:this.state.public,onChange:this.sharePublic}),t=o.a.createElement("input",{type:"checkbox",id:"friendShare",name:"friendShare",value:"Shared",checked:this.state.friend,onChange:this.shareFriend}),n=o.a.createElement("div",{id:"update-share",onClick:function(e){return c.showDelModal(e)}},"Delete Me?"));var i=[{image:this.props.image,name:this.props.name}];return o.a.createElement("div",{id:"medium-puzzle-view"},o.a.createElement("div",{id:"puzzle-view"},o.a.createElement(d.b,{className:"link",to:{pathname:"/puzzle",data:i}},o.a.createElement("img",{src:this.props.image,alt:"Link is Broken"})),o.a.createElement("span",{className:"tag_holder"},this.props.tags),o.a.createElement("h2",{className:"small-puzzle-view title"},this.props.name)),o.a.createElement("div",{id:"sharing-view"},o.a.createElement("form",{id:"sharing-form"},o.a.createElement("input",{readOnly:!0,type:"image",name:"image",value:"",src:this.props.image,alt:"Missing",style:{display:"none"}}),o.a.createElement("input",{readOnly:!0,type:"text",name:"title",value:this.props.name,style:{display:"none"}}),o.a.createElement("input",{readOnly:!0,type:"text",name:"tags",value:this.props.tags,style:{display:"none"}}),a,o.a.createElement("label",{htmlFor:"publicShare"},"public"),e,o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"friendShare"},"friends"),t,o.a.createElement("br",null),void 0,o.a.createElement("br",null),n)),o.a.createElement(x,{id:this.props.id,name:this.props.name,image:this.props.image,puzzle_id:this.props.puzzle_id,shared:this.props.friendsShared,show:this.state.showDeleteModal,handleClose:function(e){return c.hideDelModal(e)}}))}}]),a}(n.Component),P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getAllUsers()},n.getAllUsers=function(){fetch("http://localhost:3001/accounts/listall?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return n.setState({all_users:e})})).catch((function(e){return console.log(e)}))},n.filterSearchResults=function(e){n.setState({searchName:e.target.value})},n.sendFriendRequest=function(e){fetch("http://localhost:3001/requests?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"account_id=".concat(n.props.account_id,"&outgoing_request=").concat(e.target.id)}),fetch("http://localhost:3001/requests?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"account_id=".concat(e.target.id,"&incoming_request=").concat(n.props.account_id)}).then(n.setState({refresh:!0}))},n.render=function(){var e=n.props.show?"friends-modal friends-display-block":"friends-modal friends-display-none";return o.a.createElement("div",{className:e},o.a.createElement("section",{className:"modal-main"},o.a.createElement("span",{className:"close-button topright",onClick:n.props.handleClose.bind(Object(b.a)(n))},"\xd7"),o.a.createElement("label",{htmlFor:"searchName"},"Search For a User "),o.a.createElement("input",{type:"text",name:"name",id:"searchName",onChange:n.filterSearchResults,value:n.state.searchName}),o.a.createElement("div",{id:"user-list",style:{paddingTop:"10px"}},n.state.all_users.filter((function(e){return e._id!==n.props.account_id})).filter((function(e){return!n.props.friendsList.includes("".concat(e.firstName," ").concat(e.lastName))})).filter((function(e){return!n.props.notifications.outgoing.includes("".concat(e.firstName," ").concat(e.lastName))})).filter((function(e){return!n.props.notifications.incoming.includes("".concat(e.firstName," ").concat(e.lastName))})).filter((function(e){return e.firstName.toLowerCase().includes(n.state.searchName)||e.lastName.toLowerCase().includes(n.state.searchName)})).map((function(e,t){return o.a.createElement("div",{key:t,className:"req"},o.a.createElement("p",null,e.firstName," ",e.lastName),o.a.createElement("span",{onClick:n.sendFriendRequest,id:e._id},"Send Request"))})))))},n.state={all_users:[],searchName:"",refresh:!1},n.filterSearchResults=n.filterSearchResults.bind(Object(b.a)(n)),n.sendFriendRequest=n.sendFriendRequest.bind(Object(b.a)(n)),n}return a}(n.Component),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){fetch("http://localhost:3001/accounts/listall?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return n.setState({all_users:e})})).catch((function(e){return console.log(e)}))},n.acceptRequest=function(e){var t;n.state.all_users.forEach((function(a){"".concat(a.firstName," ").concat(a.lastName)===e.target.id&&(t=a._id)})),fetch("http://localhost:3001/requests/outgoing/".concat(t,"/").concat(n.props.account_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),fetch("http://localhost:3001/requests/incoming/".concat(n.props.account_id,"/").concat(t,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),fetch("http://localhost:3001/accounts/".concat(n.props.account_id,"/").concat(t,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT"}).catch((function(e){return console.log(e)})),fetch("http://localhost:3001/accounts/".concat(t,"/").concat(n.props.account_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"PUT"}).catch((function(e){return console.log(e)}))},n.declineOutGoingRequest=function(e){var t;n.state.all_users.forEach((function(a){"".concat(a.firstName," ").concat(a.lastName)===e.target.id&&(t=a._id)})),fetch("http://localhost:3001/requests/incoming/".concat(t,"/").concat(n.props.account_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),fetch("http://localhost:3001/requests/outgoing/".concat(n.props.account_id,"/").concat(t,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},n.declineIncomingRequest=function(e){var t;n.state.all_users.forEach((function(a){"".concat(a.firstName," ").concat(a.lastName)===e.target.id&&(t=a._id)})),fetch("http://localhost:3001/requests/outgoing/".concat(t,"/").concat(n.props.account_id,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),fetch("http://localhost:3001/requests/incoming/".concat(n.props.account_id,"/").concat(t,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"DELETE"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},n.state={refresh:!1,all_users:[]},n.acceptRequest=n.acceptRequest.bind(Object(b.a)(n)),n.declineOutGoingRequest=n.declineOutGoingRequest.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.show?"notif-modal notif-display-block":"notif-modal notif-display-none";return o.a.createElement("div",{className:t},o.a.createElement("section",{className:"modal-main"},o.a.createElement("span",{className:"close-button topright",onClick:this.props.handleClose.bind(this)},"\xd7"),o.a.createElement("h4",null,"Friend Requests"),o.a.createElement("div",{id:"incoming-req"},this.props.notifs.incoming.map((function(t,a){return o.a.createElement("div",{key:a,className:"req"},o.a.createElement("p",{className:"name"},t),o.a.createElement("span",{onClick:e.acceptRequest,id:t},"\u2713"),o.a.createElement("span",{onClick:e.declineIncomingRequest,id:t},"\xd7"))}))),o.a.createElement("h4",null,"Sent Friend Requests"),o.a.createElement("div",{id:"outgoing-req"},this.props.notifs.outgoing.map((function(t,a){return o.a.createElement("div",{key:a,className:"req"},o.a.createElement("p",{className:"name"},t),o.a.createElement("span",{onClick:e.declineOutGoingRequest,id:t},"\xd7"))})))))}}]),a}(n.Component),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){sessionStorage.removeItem("image"),sessionStorage.removeItem("name"),sessionStorage.removeItem("height"),sessionStorage.removeItem("width"),fetch("http://localhost:3001/requests?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return n.setState({all_requests:e})})).catch((function(e){return console.log(e)})),n.setState({account:JSON.parse(sessionStorage.getItem("user"))},(function(){n.setState({friend_ids:n.state.account.friendsList},(function(){n.setState({account_id:n.state.account._id},(function(){n.populateVaraiables()}))}))}))},n.showUploadModal=function(e){n.setState({showUploadModal:!0})},n.hideUploadModal=function(e){n.setState({showUploadModal:!1})},n.showFriendModal=function(e){n.setState({showFriendModal:!0})},n.hideFriendModal=function(e){n.setState({showFriendModal:!1})},n.showNotifModal=function(e){n.setState({showNotifModal:!0})},n.hideNotifModal=function(e){n.setState({showNotifModal:!1})},n.state={copyright:"Copyright Dery Germann 2020",gbh:o.a.createElement("a",{href:"public",id:"go-back-home-button"},o.a.createElement("p",null,"\u2190 Go Back To Public Page")),account:{},account_puzzles:[],account_friends:[],friend_ids:[],notifications:{incoming:[],outgoing:[]},account_id:"",all_requests:[],showUploadModal:!1,showFriendModal:!1,showNotifModal:!1,publicShareStatus:!1,friendShareStatus:!1},n.populateVaraiables=n.populateVaraiables.bind(Object(b.a)(n)),n}return Object(s.a)(a,[{key:"populateVaraiables",value:function(){var e=Object(C.a)(_.a.mark((function e(){var t,a,n,o,c,i,r=this;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={incoming:[],outgoing:[]},a=[],e.next=4,fetch("http://localhost:3001/puzzles?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a=e})).then((function(){var e=[];a.forEach((function(t){t.account_id===r.state.account_id&&(t.shared_puzzle?(console.log(t),t.shared_puzzle.id=t._id,e.push(t.shared_puzzle)):(t.personal_puzzle.id=t._id,e.push(t.personal_puzzle)),r.setState({account_puzzles:e}))}))})).catch((function(e){return console.log(e)}));case 4:this.state.friend_ids.forEach(function(){var e=Object(C.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/accounts/".concat(t,"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return r.setState(Object(N.a)(Object(N.a)({},r.state),{},{account_friends:[].concat(Object(S.a)(r.state.account_friends),[["".concat(e[0].firstName," ").concat(e[0].lastName)]])}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.state.all_requests.forEach((function(e){e.account_id===r.state.account_id&&(e.incoming_request?t.incoming.push(e.incoming_request):t.outgoing.push(e.outgoing_request))})),n=_.a.mark((function e(a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/accounts/".concat(t.incoming[a],"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return t.incoming[a]="".concat(e[0].firstName," ").concat(e[0].lastName)}));case 2:case"end":return e.stop()}}),e)})),o=0;case 8:if(!(o<t.incoming.length)){e.next=13;break}return e.delegateYield(n(o),"t0",10);case 10:o++,e.next=8;break;case 13:c=_.a.mark((function e(a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/accounts/".concat(t.outgoing[a],"?apikey=90e5dc53-ba26-4a92-85b1-9c2375ff1495"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return t.outgoing[a]="".concat(e[0].firstName," ").concat(e[0].lastName)}));case 2:case"end":return e.stop()}}),e)})),i=0;case 15:if(!(i<t.outgoing.length)){e.next=20;break}return e.delegateYield(c(i),"t1",17);case 17:i++,e.next=15;break;case 20:this.setState({notifications:t});case 21:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=0;this.state.notifications.incoming&&this.state.notifications.incoming.length&&(t=this.state.notifications.incoming.length);var a=this.state.account_id;return o.a.createElement("div",{id:"pageContent"},o.a.createElement("div",{id:"header"},o.a.createElement(p,{redirect:"signup",pageName:"Log Out",goBackHome:this.state.gbh})),o.a.createElement("div",{id:"content"},o.a.createElement("div",{id:"account-content-holder"},o.a.createElement("div",{id:"friends-list"},o.a.createElement("div",{id:"notif-title"},o.a.createElement("h4",null,"Friends List"),o.a.createElement(I,{account_id:this.state.account_id,friends:this.state.account_friends,show:this.state.showNotifModal,handleClose:function(t){return e.hideNotifModal(t)},notifs:this.state.notifications}),o.a.createElement("div",{id:"notif",onClick:function(t){return e.showNotifModal(t)}},t)),o.a.createElement("div",null,o.a.createElement(O,{friends:this.state.account_friends}),o.a.createElement(P,{account_id:this.state.account_id,friendsList:this.state.account_friends,notifications:this.state.notifications,show:this.state.showFriendModal,handleClose:function(t){return e.hideFriendModal(t)}})),o.a.createElement("div",{className:"button",id:"friends-button",onClick:function(t){return e.showFriendModal(t)}},"Search For More Friends")),o.a.createElement("div",{id:"account-puzzles"},this.state.account_puzzles.map((function(t,n){var c=!1,i=!1,r=!1;return t.hasOwnProperty("status")?("Shared"===t.status&&(r=!0),"Both"===t.status&&(r=!0,i=!0),"Public"===t.status&&(i=!0)):c=!0,o.a.createElement(T,{key:n,image:t.image,tags:t.tags,name:t.name,id:a,puzzle_id:t.id,friend_list:e.state.friend_ids,publicallyShared:i,friendsShared:r,neither:c})})))),o.a.createElement(j,{show:this.state.showUploadModal,handleClose:function(t){return e.hideUploadModal(t)},image:this.state.imagePreview,accountId:a}),o.a.createElement("div",{style:{marginTop:"10px"},className:"button",onClick:function(t){return e.showUploadModal(t)}},"Click to Create a New Puzzle")),o.a.createElement("div",{id:"footer"},o.a.createElement(f,{copyright:this.state.copyright})))}}]),a}(n.Component),M=a(29),D=a.n(M),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleResize=function(e){n.setState({window_width:window.innerWidth})},n.state={copyright:"Copyright Dery Germann 2020",gbh:o.a.createElement("a",{href:"account",id:"go-back-home-button"},o.a.createElement("p",null,"\u2190 Go Back To Your Account")),img_width:0,img_height:0,window_width:window.innerWidth},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e,t=document.createElement("canvas"),a=[],n=[],c=[],i=1,r=1;if(sessionStorage.getItem("image")){e=sessionStorage.getItem("name");var s=document.createElement("img");s.src=sessionStorage.getItem("image"),(s.width>1e3||s.height>1e3)&&(i=.5,r=.5);var l=t.getContext("2d");t.width=sessionStorage.getItem("height"),t.height=sessionStorage.getItem("width"),l.drawImage(s,0,0,s.width*r,s.height*i)}else{var u=this.props.location.data;e=u[0].name,sessionStorage.setItem("name",u[0].name);var d=document.createElement("img");d.src=u[0].image,(d.width>1e3||d.height>1e3)&&(i=.5,r=.5);var h=d.width*r,m=d.height*i,g=t.getContext("2d");t.width=h,t.height=m,g.drawImage(d,0,0,d.width*r,d.height*i),sessionStorage.setItem("height",t.width),sessionStorage.setItem("width",t.height),sessionStorage.setItem("image",t.toDataURL())}for(var b=0;b<5;b++){n=[];for(var E=0;E<5;E++)0===b&&0===E?n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{borderLeft:"1px solid grey",borderTop:"1px solid grey",maxHeight:t.height/5,minHeight:t.height/5}})):4===b&&0===E?n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{borderRight:"1px solid grey",borderTop:"1px solid grey",maxHeight:t.height/5,minHeight:t.height/5}})):0!==b||1!==E&&2!==E&&3!==E?4!==b||1!==E&&2!==E&&3!==E?1===b||2===b||3===b?0===E?n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{borderTop:"1px solid grey",maxHeight:t.height/5,minHeight:t.height/5}})):4===E?n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{borderBottom:"1px solid grey",maxHeight:t.height/5,minHeight:t.height/5}})):n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{maxHeight:t.height/5,minHeight:t.height/5}})):0===b&&4===E?n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{borderLeft:"1px solid grey",borderBottom:"1px solid grey",maxHeight:t.height/5,minHeight:t.height/5}})):4===b&&4===E?n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{borderRight:"1px solid grey",borderBottom:"1px solid grey",maxHeight:t.height/5,minHeight:t.height/5}})):n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{maxHeight:t.height/5,minHeight:t.height/5}})):n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{borderRight:"1px solid grey",maxHeight:t.height/5,minHeight:t.height/5}})):n.push(o.a.createElement("div",{key:"".concat(b,",").concat(E),style:{borderLeft:"1px solid grey",maxHeight:t.height/5,minHeight:t.height/5}}));a.push(o.a.createElement("div",{key:b,style:{minWidth:t.width/5,maxWidth:t.width/5}},n))}var v=t.width/5,y=t.height/5;console.log(v),console.log(y);for(var w=-1,z=-1,k=0;k<5;k++){w+=1,z=-1;for(var _=0;_<5;_++){z+=1;var S=document.createElement("canvas"),N=S.getContext("2d");S.width=v,S.height=y,N.drawImage(t,z*v,w*y,v,y,0,0,v,y),c.push(o.a.createElement(D.a,null,o.a.createElement("img",{src:S.toDataURL(),style:{border:"1px solid black"}})))}}for(var C=c.length-1;C>0;C--){var O=Math.floor(Math.random()*C),j=c[C];c[C]=c[O],c[O]=j}return o.a.createElement("div",{id:"pageContent"},o.a.createElement("div",{id:"header"},o.a.createElement(p,{redirect:"signup",pageName:"Log Out",goBackHome:this.state.gbh})),o.a.createElement("div",{id:"content"},o.a.createElement("h2",null,"Puzzle Name: ",o.a.createElement("u",null,e)),o.a.createElement("div",{id:"solving-puzzle-view"},o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},o.a.createElement("div",{id:"puzzle-pieces"},o.a.createElement("h2",null,"Puzzle Pieces"),c),o.a.createElement("div",{id:"puzzle-outline"},a))),o.a.createElement("div",{id:"puzzle-preview"},o.a.createElement("h2",null,"What Your Puzzle Should Look Like!"),o.a.createElement("img",{id:"preview",src:t.toDataURL()}))),o.a.createElement("div",{id:"footer"},o.a.createElement(f,{copyright:this.state.copyright})))}}]),a}(n.Component),L=a(31),U=function(e){var t=e.component,a=e.auth,n=Object(L.a)(e,["component","auth"]);return o.a.createElement(h.b,Object.assign({},n,{render:function(e){return!0===a?o.a.createElement(t,e):o.a.createElement(h.a,{to:"/"})}}))},R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=!1;return sessionStorage.getItem("user")&&(e=!0),o.a.createElement(d.a,null,o.a.createElement(h.b,{path:"/",exact:!0,component:g}),o.a.createElement(h.b,{path:"/signup",component:y}),o.a.createElement(h.b,{path:"/public",component:z}),o.a.createElement(U,{path:"/account",component:q,auth:e}),o.a.createElement(U,{path:"/puzzle",component:H,auth:e}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.aa52685e.chunk.js.map