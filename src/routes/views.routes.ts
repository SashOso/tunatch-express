import {Request, Response, Router} from 'express';

const router = Router();

router.get('/',(req:Request,res:Response)=>{
    res.render("pages/home")
})
router.get('/albums',(req:Request,res:Response)=>{
    res.render("pages/albums")
})
router.get('/artists',(req:Request,res:Response)=>{
    res.render("pages/artists")
})
router.get('/songs',(req:Request,res:Response)=>{
    res.render("pages/songs")
})
router.get('/playlist/:id',(req:Request,res:Response)=>{
    res.render("pages/playlist",{id:req.params.id||null})
})
router.get('/playlist-register',(req:Request,res:Response)=>{
    res.render("pages/playlist-register",{id:null})
})
router.get('/playlist-register/:id',(req:Request,res:Response)=>{
    res.render("pages/playlist-register",{id:req.params.id||null})
})

router.get('/settings',(req:Request,res:Response)=>{
    res.render("pages/settings")
})
router.get('/login',(req:Request,res:Response)=>{
    res.render("pages/login")
})
router.get('/register',(req:Request,res:Response)=>{
    res.render("pages/register")
})

export default router;