# 🧮 Calculator App

A modern, responsive calculator web application built with HTML, CSS, and JavaScript. Features a sleek dark theme with intuitive user interface and full keyboard support.


## ✨ Features

### Core Functionality
- ✅ **Basic Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- ✅ **Decimal Support**: Handle decimal numbers with precision
- ✅ **Clear Function**: Reset calculator with C button
- ✅ **Backspace**: Delete last entered digit with ⌫ button
- ✅ **Modulo Operation**: Calculate remainders with % operator

### Enhanced Features
- 🎹 **Full Keyboard Support**: Use your keyboard for all operations
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ✨ **Visual Feedback**: Hover effects and button animations
- 🎯 **Operator Highlighting**: Shows active operation
- ⚡ **Error Handling**: Prevents division by zero and invalid operations
- 🔢 **Smart Number Formatting**: Handles large numbers and scientific notation

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

1. **Clone or Download** this repository
   ```bash
   git clone https://github.com/yourusername/calculator-app.git
   ```

2. **Navigate** to the project directory
   ```bash
   cd calculator-app
   ```

3. **Open** `index.html` in your web browser
   - Double-click the `index.html` file, or
   - Right-click and select "Open with" → Your preferred browser, or
   - Use a local development server

### File Structure
```
calculator-app/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎮 How to Use

### Mouse/Touch Controls
- Click number buttons (0-9) to input numbers
- Click operator buttons (+, -, ×, ÷, %) to perform operations
- Click equals (=) button to calculate result
- Click C button to clear/reset calculator
- Click ⌫ button to delete last digit

### Keyboard Controls
| Key | Function |
|-----|----------|
| `0-9` | Input numbers |
| `.` | Decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulo |
| `Enter` or `=` | Calculate result |
| `Escape` or `C` | Clear calculator |
| `Backspace` | Delete last digit |

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Grid layout and animations
- **Vanilla JavaScript**: Core functionality and event handling

### Key Features Implementation
- **Responsive Grid Layout**: CSS Grid for button arrangement
- **State Management**: JavaScript variables for calculator state
- **Event Handling**: Both click and keyboard event listeners
- **Input Validation**: Prevents invalid operations and formatting
- **Animation Effects**: CSS transitions for smooth interactions

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The calculator automatically adapts to different screen sizes:

- **Desktop** (>480px): Full-size buttons and display
- **Tablet** (350px-480px): Medium-sized interface
- **Mobile** (<350px): Compact layout optimized for touch

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
/* Example color customization */
.calculator {
    background: #your-color; /* Calculator body */
}

.btn-operator {
    background: #your-accent-color; /* Operator buttons */
}

.display {
    background: #your-display-color; /* Display background */
}
```

### Adding New Features
The modular structure makes it easy to extend:

1. **HTML**: Add new buttons in `index.html`
2. **CSS**: Style new elements in `styles.css`
3. **JavaScript**: Add functionality in `script.js`

## 🐛 Known Issues

- Very large numbers may display in scientific notation
- Continuous decimal operations may have minor floating-point precision issues

## 📋 Future Enhancements

- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Calculation history
- [ ] Scientific calculator mode
- [ ] Theme switching (Light/Dark)
- [ ] Sound effects
- [ ] Copy result to clipboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 👨‍💻 Author

**Your Name**
- GitHub: [@Amarachu](https://github.com/Amarachi32)
- Email: prptamarachi@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern calculator interfaces
- Icons from system fonts and Unicode characters
- Color scheme inspired by popular dark themes

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Amarachi32/calculator-app/issues) section
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about the problem and your browser/device

---

**⭐ Star this repository if you found it helpful!**