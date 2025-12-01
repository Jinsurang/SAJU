# 四柱八字 Saju - Korean Four Pillars Fortune Reading

A clean and minimalist web application for calculating traditional Korean Saju (Four Pillars of Destiny) readings, designed for international users.

![Toss Style](https://img.shields.io/badge/Style-Toss%2FApple-3182f6)
![No Dependencies](https://img.shields.io/badge/Dependencies-None-green)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

## ✨ Features

### 🎯 Core Calculations
- **Four Pillars (四柱八字)** - Year, Month, Day, Hour pillars with precise calculations
- **Ten Gods (十星)** - Complete relationship analysis based on day stem
- **12 Life Stages (十二運星)** - Life energy phases for each pillar
- **Major Life Cycles (大運)** - 10-year fortune periods (10 cycles)
- **Annual Fortunes (歲運)** - Yearly fortune predictions (10 years)
- **Monthly Fortunes (月運)** - Monthly fortune for current year (12 months)
- **Five Elements Balance (五行)** - Wood, Fire, Earth, Metal, Water analysis with percentages

### 📅 Calendar Support
- **Lunar-Solar Conversion** - Accurate conversion for 1900-2100
- **Solar Calendar** - Gregorian calendar support
- **Lunar Calendar** - Traditional lunar calendar with leap month support

### 🎨 Design
- **Toss/Apple Style** - Clean, minimal, modern design
- **Mobile First** - Optimized for mobile devices
- **Responsive** - Works on all screen sizes
- **No Dependencies** - Pure vanilla JavaScript

## 🚀 Quick Start

### Option 1: Download and Open
1. Download all files
2. Open `index.html` in your browser
3. No server or build process required!

### Option 2: Clone Repository
```bash
git clone https://github.com/yourusername/saju-reading.git
cd saju-reading
open index.html
```

## 📖 Usage

### Required Information
- **Name** - Your name
- **Birth Date** - Year (1900-2100), Month (1-12), Day (1-31)
- **Sex at Birth** - Male or Female (affects Major Life Cycles calculation)
- **Calendar Type** - Solar (Gregorian) or Lunar

### Optional Information
- **Birth Time** - Hour and minute (for accurate hour pillar)
  - Check "I don't know my birth time" if unknown

### Example Input
```
Name: John Smith
Birth Date: 1996 / 08 / 16
Sex at Birth: Male
Calendar Type: Solar
Birth Time: 10:55
```

## 📁 File Structure

```
saju-reading/
├── index.html      # Main HTML with embedded JavaScript
├── style.css       # Toss/Apple style CSS
├── lunar.js        # Lunar-Solar calendar conversion
├── saju.js         # Core Saju calculation engine
└── README.md       # This file
```

## 🔧 Technical Details

### Core Algorithms
- **Year Pillar**: Based on 60-year cycle (Sexagenary cycle)
- **Month Pillar**: Calculated from year stem and solar terms
- **Day Pillar**: Days since 1900-01-01 (乙亥 day)
- **Hour Pillar**: Based on day stem and birth hour
- **Ten Gods**: Relationship between day stem and other stems
- **12 Life Stages**: Based on day stem and earthly branches
- **Lunar Conversion**: Bitwise storage of lunar month data

### Browser Support
- Chrome (recommended)
- Safari
- Firefox
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color System

### Five Elements
- 🌳 **Wood** - Green (#10b981)
- 🔥 **Fire** - Red (#ef4444)
- 🌍 **Earth** - Yellow (#f59e0b)
- ⚙️ **Metal** - Gray (#e5e8eb)
- 💧 **Water** - Blue (#3b82f6)

### UI Colors (Toss Style)
- **Primary** - #3182f6 (Toss Blue)
- **Background** - #f8f9fa
- **Card** - #ffffff
- **Border** - #e5e8eb
- **Text** - #191f28

## 🌏 Supported Languages
- **UI Language**: English
- **Hanja (漢字)**: Traditional Chinese characters for Saju content
- **Romanization**: Korean romanization for pronunciation

## 📚 Understanding Saju

### Four Pillars (四柱)
Each pillar consists of:
- **Heavenly Stem (天干)**: 10 stems representing yin/yang and five elements
- **Earthly Branch (地支)**: 12 branches representing 12 animals and elements

### Ten Gods (十星)
Relationships between your day stem and other stems:
- 比肩 (Peer), 劫財 (Rob Wealth)
- 食神 (Eating God), 傷官 (Hurt Officer)
- 偏財 (Indirect Wealth), 正財 (Direct Wealth)
- 偏官 (Seven Killings), 正官 (Direct Officer)
- 偏印 (Indirect Resource), 正印 (Direct Resource)

### 12 Life Stages (十二運星)
Energy levels throughout life:
- 長生 (Birth), 沐浴 (Bathing), 冠帶 (Youth), 建祿 (Adulthood)
- 帝旺 (Peak), 衰 (Aging), 病 (Sickness), 死 (Death)
- 墓 (Grave), 絶 (Extinction), 胎 (Conception), 養 (Nourishment)

## 🛠️ Development

### No Build Process
This project uses vanilla JavaScript with no build tools, bundlers, or dependencies.

### Code Structure
- **Modular Functions**: Each calculation is a separate function
- **No External Libraries**: Pure JavaScript
- **Simple Variables**: Uses `var` for maximum compatibility
- **Direct Event Handlers**: Uses `onclick` for simplicity

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🙏 Acknowledgments

Based on traditional Korean Saju (四柱八字) fortune-telling methods and Manseryeok (萬歲曆) calculation principles.

## 🐛 Issues & Contributions

Found a bug or want to contribute? Please open an issue or pull request!

---

**Made with ❤️ for anyone interested in Korean traditional fortune telling**
