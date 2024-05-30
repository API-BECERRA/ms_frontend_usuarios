export const home = (req,res) => {
    // res.send("home")
    res.render("views.home.ejs");
}
export const contact = (req,res) => {
    res.render("views.contact.ejs")
}