const template = `

<div class="col col-12 col-lg-6 mb-3 shadow-lg">
	<div class="row position-relative no-gutters article">
		<div class="col col-12 position-absolute front d-flex flex-column justify-content-around" v-bind:style="frontTr">
			<div class="row">
				<div class="col col-12">
					<h3 class="m-auto text-center">{{item.title}}</h3>
				</div>
			</div>
			<div class="row d-flex justify-content-center mt-3">
				<div class="col col-3">
					<img v-bind:src="item.t1_pic" class="img-fluid" alt="...">
					<p class="text-center">{{item.t1_posi}}</p>
				</div>
				<div class="col col-3 b d-flex justify-content-center align-items-center">
					<p class="display-4 d-none d-lg-block">V S</p>
					<p class="h1 d-lg-none">V S</p>
				</div>
				<div class="col col-3">
					<img v-bind:src="item.t2_pic" class="img-fluid" alt="...">
					<p class="text-center">{{item.t2_posi}}</p>
				</div>
			</div>
			<div class="row mt-3">
				<h4 class="m-auto text-light font-italic" v-bind:data-time="item.game_time">{{item.game}}&nbsp&nbsp{{item.time}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{item.date}}</h4>
			</div>
			<div class="row d-flex justify-content-around align-items-center mt-3 no-gutters">
				<div class="col col-3 d-flex flex-column align-items-center">
					<h4 class="text-center">{{days}}</h4>
                    <p class="text-center">DAYS</p>
				</div>
				<div class="col col-3 d-flex flex-column align-items-center">
					<h4 class="text-center">{{hours}}</h4>
                    <p class="text-center">HOURS</p>
				</div>
				<div class="col col-3 d-flex flex-column align-items-center">
					<h4 class="text-center">{{minutes}}</h4>
                    <p class="text-center">MINUTES</p>
				</div>
				<div class="col col-3 d-flex flex-column align-items-center">
					<h4 class="text-center">{{seconds}}</h4>
                    <p class="text-center">SECONDS</p>
				</div>
			</div>
			<div class="row d-flex justify-content-end">
				<h5 class="details mr-4" v-on:click="frontClick">MORE DETAILS <i class="fas fa-hand-point-right"></i></h5>
			</div>
		</div>



		<div class="col col-12 position-absolute back d-flex flex-column justify-content-around" v-bind:style="backTr">
			<div class="row">
				<div class="col col-12 col-md-5 d-flex flex-column justify-content-center">
					<p class="mb-1 d-none d-lg-block"><b>Team Info</b></p>
					<p class="mb-1"><i>{{item.team1}}</i></p>
					<p class="mb-1 d-none d-lg-block"><b>球馆：</b>{{item.t1_arena}}</p>
					<p class="mb-1"><b>赛区：</b>{{item.t1_division}}</p>
					<p class="mb-1"><b>排名：</b>{{item.t1_rank}}</p>
					<p class="mb-1 d-none d-lg-block"><b>教练：</b>{{item.t1_coach}}</p>
				</div>
				<div class="col col-12 col-md-7 d-flex justify-content-center align-items-center">
					<div class="card" style="width: 100%;;max-height: 7.2rem;">
						<div class="row">
							<div class="col col-5 d-flex justify-content-center align-items-center">
								<img v-bind:src="item.t1_p1_pic" class="card-img" alt="..." style="width: 80%;height: 80%;">
							</div>
							<div class="col col-7">
								<div class="card-body p-0">
									<h5 class="card-title mb-0">{{item.t1_player}}</h5>
									<p class="card-text mb-0"><small class="text-muted">Regular Season Highlight</small></p>
									<p class="mb-0"><small class="text-muted"><span>{{item.t1_p1_pts}} 分 </span><span>{{item.t1_p1_reb}} 篮板 </span><span>{{item.t1_p1_ast}} 助攻</span></small></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col col-12 col-md-5 d-flex flex-column justify-content-center">
					<p class="mb-1 d-none d-lg-block"><b>Team Info</b></p>
					<p class="mb-1"><i>{{item.team2}}</i></p>
					<p class="mb-1 d-none d-lg-block"><b>球馆：</b>{{item.t2_arena}}</p>
					<p class="mb-1"><b>赛区：</b>{{item.t2_division}}</p>
					<p class="mb-1"><b>排名：</b>{{item.t2_rank}}</p>
					<p class="mb-1 d-none d-lg-block"><b>教练：</b>{{item.t2_coach}}</p>
				</div>
				<div class="col col-12 col-md-7 d-flex justify-content-center align-items-center">
					<div class="card" style="width: 100%;max-height: 7.2rem;">
						<div class="row">
							<div class="col col-5 d-flex justify-content-center align-items-center">
								<img v-bind:src="item.t2_p2_pic" class="card-img" alt="..." style="width: 80%;height: 80%;">
							</div>
							<div class="col col-7">
								<div class="card-body p-0">
									<h5 class="card-title mb-0">{{item.t2_player}}</h5>
									<p class="card-text mb-0"><small class="text-muted">Regular Season Highlight</small></p>
									<p class="mb-0"><small class="text-muted"><span>{{item.t2_p2_pts}} 分 </span><span>{{item.t2_p2_reb}} 篮板 </span><span>{{item.t2_p2_ast}} 助攻</span></small></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row d-flex justify-content-end">
				<h5 class="mr-4 back-to" v-on:click="backClick"><i class="fas fa-hand-point-left"></i> BACK</h5>
			</div>
		</div>
	</div>
</div>

`;

Vue.component("articles", {
    data: function() {
        return {
            frontTr: { transform: "rotateY(0deg)" },
            backTr: { transform: "rotateY(180deg)" },
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00"
        };
    },
    methods: {
        frontClick() {
            this.frontTr.transform = "rotateY(-180deg)";
            this.backTr.transform = "rotateY(0deg)";
        },
        backClick() {
            this.frontTr.transform = "rotateY(0deg)";
            this.backTr.transform = "rotateY(180deg)";
        }
    },
    created: function() {
        // console.log(this.$props.item.game_time);
        window.setInterval(() => {
            const time = new Date(this.$props.item.game_time).getTime();
            const now = new Date().getTime();
            const d = time - now;
            this.days = Math.floor(d / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((d % (1000 * 60)) / 1000);
        }, 1000);
    },
    props: ["item"],
    template: template
});
