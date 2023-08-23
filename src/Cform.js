
export default function Cform(){
    return(

        <form>
        <hr/>
<div class="text-center grid grid-cols-5 gap-4 place-content-center px-10 py-8 rounded-md container mx-auto">
    <h2 className="py-3 md:col-span-5 col-span-6 text-4xl text-slate-50">Contact Form</h2>


    <select name="des" className="px-2 py-3 text-center rounded-md md:col-span-1 col-span-6 drop-shadow-md bg-zinc-200 placeholder:text-zinc-500 placeholder:text-center">
      <option value={1}>Mr</option>
      <option value={2}>Mrs</option>
      <option value={3}>Dr</option>
    </select>


    <input type="text" name="fname"  placeholder="First Name" className="form-input px-2 py-3 md:col-span-2 col-span-6 text-center rounded-md drop-shadow-md bg-zinc-200 placeholder:text-zinc-500 placeholder:text-center"></input>
    <input type="text" name="lname"  placeholder="Last Name" className="form-input px-2 py-3 md:col-span-2 col-span-6 text-center rounded-md drop-shadow-md bg-zinc-200 placeholder:text-zinc-500 placeholder:text-center"></input>
    <input type="text" name="jtitle"  placeholder="Job Title" className="form-input px-2 py-3 text-center md:col-span-1 col-span-6 rounded-md drop-shadow-md bg-zinc-200 placeholder:text-zinc-500 placeholder:text-center"></input>
    <input type="email" name="email"  placeholder="Email" className="form-input px-2 py-3 md:col-span-2 col-span-6 text-center rounded-md drop-shadow-md bg-zinc-200 placeholder:text-zinc-500 placeholder:text-center"></input>
    <input type="text" name="cname" placeholder="Company Name" className="form-input px-2 py-3 md:col-span-2 col-span-6 text-center rounded-md drop-shadow-md bg-zinc-200 placeholder:text-zinc-500 placeholder:text-center"></input>
    <textarea id="message" name="msg" rows="3" class="px-2 py-3 w-full text-center md:col-span-4 col-span-6 bg-zinc-200 rounded-md placeholder:text-zinc-500 placeholder:text-center " placeholder="Write your message here..."></textarea>
    <button type="submit" class="rounded-lg border-2 md:col-span-1 col-span-6 text-zinc-800 border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-3 max-h-14 self-center hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 drop-shadow-md"
            >Send</button>
    

</div>
</form> 
    )
}