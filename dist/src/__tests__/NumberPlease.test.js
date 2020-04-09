"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const NumberPlease_1 = __importDefault(require("../NumberPlease"));
it('renders correctly', () => {
    const pizzas = { pizzas: 0 };
    const pizzaNumbers = [{ id: 'pizza', label: '🍕', min: 0, max: 99 }];
    const Picker = react_test_renderer_1.default
        .create(<NumberPlease_1.default pickers={pizzaNumbers} values={pizzas} onChange={(values) => console.log(values)}/>)
        .toJSON();
    expect(Picker).toMatchSnapshot();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyUGxlYXNlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvX190ZXN0c19fL051bWJlclBsZWFzZS50ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsOEVBQTJDO0FBQzNDLG1FQUEyQztBQUUzQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQzNCLE1BQU0sTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQzdCLE1BQU0sWUFBWSxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVyRSxNQUFNLE1BQU0sR0FBRyw2QkFBUTtTQUNwQixNQUFNLENBQ0wsQ0FBQyxzQkFBWSxDQUNYLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUN0QixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FDZixRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUMvQyxDQUNIO1NBQ0EsTUFBTSxFQUFFLENBQUM7SUFFWixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgTnVtYmVyUGxlYXNlIGZyb20gJy4uL051bWJlclBsZWFzZSc7XG5cbml0KCdyZW5kZXJzIGNvcnJlY3RseScsICgpID0+IHtcbiAgY29uc3QgcGl6emFzID0geyBwaXp6YXM6IDAgfTtcbiAgY29uc3QgcGl6emFOdW1iZXJzID0gW3sgaWQ6ICdwaXp6YScsIGxhYmVsOiAn8J+NlScsIG1pbjogMCwgbWF4OiA5OSB9XTtcblxuICBjb25zdCBQaWNrZXIgPSByZW5kZXJlclxuICAgIC5jcmVhdGUoXG4gICAgICA8TnVtYmVyUGxlYXNlXG4gICAgICAgIHBpY2tlcnM9e3BpenphTnVtYmVyc31cbiAgICAgICAgdmFsdWVzPXtwaXp6YXN9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XG4gICAgICAvPlxuICAgIClcbiAgICAudG9KU09OKCk7XG5cbiAgZXhwZWN0KFBpY2tlcikudG9NYXRjaFNuYXBzaG90KCk7XG59KTtcbiJdfQ==