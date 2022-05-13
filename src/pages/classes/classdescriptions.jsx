import React from "react";
import ClassesCard from "../../Components/Cards/ClassesCard";

export default function classdescriptions() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>

            <div className="container">
                <div className="row mb-3">
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/aquaaerobics.png")}
                            title="Aqua Aerobics"
                            description={
                                "A non-weight bearing water based workout designed to keep you strong and healthy through a range of effective resistance and aerobic exercises. Suitable for all water lovers, swimming ability not necessary."
                            }
                            timetableLink="See Timetable"
                        />
                    </div>
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/aquahiit.png")}
                            title="Aqua H.I.I.T"
                            description="Bringing the popular high-intensity interval training techniques to water provides greater resistance but less impact - so less stress on the joints. This ideal combination gives you both strength and flexibility."
                            timetableLink="See Timetable"
                        />
                    </div>
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/wateraerobics.jpg")}
                            title="Aqua Yoga"
                            description="Aqua Yoga is a low-impact aquatic exercise class. Poses and stretches done in the water to develop strength, static balance and range of motion.  Suitable for all water lovers, swimming ability not necessary."
                            timetableLink="See Timetable"
                        />
                    </div>
                </div>

                <div className="row  mb-3">
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/bodypump.png")}
                            title="BodyPump"
                            description="A perfect blend of Yoga, Tai Chi and Pilates designed to leave you feeling strong, centred and calm. A personal 'time out' from daily stresses to enhance your physical and mental well-being"
                            timetableLink="See Timetable"
                        />
                    </div>
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/bodycombat.png")}
                            title="BodyCombat"
                            description="Step into a BODYCOMBAT workout and you’ll punch and kick your way to fitness, burning up to 740 calories along the way. This high-energy martial-arts inspired workout is non-contact with simple moves to sculpt and shred"
                            timetableLink="See Timetable"
                        />
                    </div>
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/bodybalance.png")}
                            title="BodyBalance"
                            description="Take the original, 20 year strong, free weights workout! Blending light weights and high reps to sculpt, tone and strengthen every muscle group with an average burn of 600 calories per class."
                            timetableLink="See Timetable"
                        />
                    </div>
                </div>

                <div className="row  mb-3">
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/pilates.png")}
                            title="Pilates"
                            description="Work at your own level to gain improvements in balance, flexibility, posture and breath/body awareness. Perfect for those from beginner to advanced.  Improve posture and overall toning with every class."
                            timetableLink="See Timetable"
                        />
                    </div>
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/zumba.png")}
                            title="Zumba"
                            description="Designed for everyone! The invigorating dance-fitness 'party' will have you movin', groovin' and shakin' the weight off to the sexy, exotic rhythms of salsa, samba, merengue and more!"
                            timetableLink="See Timetable"
                        />
                    </div>
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/rpm.png")}
                            title="RPM"
                            description="Everyone's favourite spin class. Born from the sport of cycle racing, RPM uses simulated climbs and sprints in a workout where you control the intensity. It’s fun, low impact with a serious caloric burn!"
                            timetableLink="See Timetable"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/virtualrpm.png")}
                            title="Virutal RPM"
                            description="Everyone's favourite spin class just without the instructor. Born from the sport of cycle racing, RPM uses simulated climbs and sprints in a workout where you control the intensity. It’s fun, low impact with a serious caloric burn!"
                            timetableLink="See Timetable"
                        />
                    </div>
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/virtualbodypump.png")}
                            title="Virtual BodyPump"
                            description="Everyone's favourite BodyPump class just without the instructor. Step into a BODYCOMBAT workout and you’ll punch and kick your way to fitness, burning up to 740 calories along the way. This high-energy martial-arts inspired workout is non-contact with simple moves to sculpt and shred"
                            timetableLink="See Timetable"
                        />
                    </div>
                    <div className="col-sm-4">
                        <ClassesCard
                            image={require("../../Assets/classes/boxing.png")}
                            title="Boxing"
                            description="A really intense workout targeting all muscle groups. Combines speed, power and endurance training all with the use of gloves and boxing bags"
                            timetableLink="See Timetable"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
