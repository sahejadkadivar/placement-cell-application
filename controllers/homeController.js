import Student from "../models/studentSchema.js";

// Render home page and load students details
export default class HomeController {
    
    async homePage(req, res) {
        try {
            const students = await Student.find({});
            return res.render('home', { students });
        } catch (error) {
            return res.status(500).send("An error occurred while fetching students.");
        }
    }
}
