## CipherSchools-1
**Q1. React Concepts Applied: E-Commerce App Scenario**
*You're building an e-commerce web app.*
   
   *You have a ProductCard component that displays a product’s name and price.*

1. How will you pass these values from the parent component?

   Ans -> I will make use of Props to pass these values from parent component.
   
   e.g.
   ```js <ComponentName brand='Porsche', model='911'/>```

   
   *Each product has a "Like" button that toggles between "Liked ❤️" and "Like 🤍."*

2. How will you implement this toggle using useState?

   Ans -> I’d use the useState hook inside ProductCard to toggle the like status. Something like:

   eg.
   ```js
   const [liked, setLiked] = useState(false);

   <button onClick={() => setLiked(!liked)}>
     {liked ? 'Liked ❤️' : 'Like 🤍'}
   </button>
   ```


   *There’s a search input at the top to filter products as the user types.*

3. How will you manage this input using a controlled component approach?

   Ans -> For search, I’d keep the input controlled by using useState in the parent component. For example:
   ```js
   const [searchTerm, setSearchTerm] = useState("");

   <input
     type="text"
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
     placeholder="Search products..."
   />
   ```


   *Your app supports light and dark themes.*

4. How will you share the current theme across all components using useContext?

   Ans -> I’d create a ThemeContext using createContext and wrap my app in a ThemeProvider. Inside any component, I’d use useContext(ThemeContext) to get the current theme and toggle function.
   ```js
   const ThemeContext = createContext();

   const ThemeProvider = ({ children }) => {
     const [theme, setTheme] = useState("light");
     const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");
   
     return (
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
       </ThemeContext.Provider>
     );
   };
   ```


*The "Checkout" page should only be accessible to logged-in users.*

5. How will you protect this route to restrict unauthenticated access?

   Ans -> I’d protect the "Checkout" route using React Router. I’d create a PrivateRoute component that checks if the user is authenticated (maybe from a context or global state). If not logged in, it redirects to login.
   ```js
   <Route path="/checkout" element={
     isLoggedIn ? <Checkout /> : <Navigate to="/login" />
   } />
   
   ```
