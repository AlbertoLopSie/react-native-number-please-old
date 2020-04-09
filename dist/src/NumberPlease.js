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
const react_native_1 = require("react-native");
const array_utils_1 = require("./utils/array.utils");
const range_1 = __importDefault(require("./utils/range"));
const picker_1 = require("@react-native-picker/picker");
const PickerFactory = React.forwardRef(({ pickerProps, selectedValue, onChange, style, itemStyle, disabled, }, ref) => {
    const { id, label = '', min, max } = pickerProps;
    const numbers = (0, range_1.default)(min, max);
    return (<picker_1.Picker ref={ref} style={{ ...styles.picker, ...style }} selectedValue={selectedValue} onValueChange={(value) => onChange({ [id]: value })} itemStyle={itemStyle} enabled={!disabled}>
      {numbers.map((number, index) => (<picker_1.Picker.Item key={`${id}-${number}-${index}`} value={number} label={`${number} ${label}`} enabled={!disabled}/>))}
    </picker_1.Picker>);
});
const NumberPlease = ({ pickers, values, onChange, itemStyle, style, ...rest }) => {
    console.log(pickers);
    React.useEffect(() => {
        Object.keys(values).some((key) => {
            if (!(0, array_utils_1.find)(pickers, (picker) => picker.id === key)) {
                throw new Error(`Picker with id '${key}' not found. Double check your initialValues.`);
            }
        });
    }, [values, pickers]);
    const onChangeHandle = (value) => {
        onChange({
            ...values,
            ...value,
        });
    };
    const findPickerValue = (picker) => {
        return values[picker.id];
    };
    return (<react_native_1.View style={styles.container}>
      {pickers.map((picker, index) => {
            const { id, ref, disabled = false } = picker;
            const pickerValue = findPickerValue(picker);
            return (<PickerFactory ref={ref} key={`${id}-picker-${index}`} pickerProps={picker} selectedValue={pickerValue} onChange={onChangeHandle} disabled={disabled} itemStyle={itemStyle} style={style} {...rest}/>);
        })}
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        height: '100%',
        flex: 1,
    },
});
exports.default = NumberPlease;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtYmVyUGxlYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL051bWJlclBsZWFzZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLCtDQUFnRDtBQUNoRCxxREFBMEM7QUFFMUMsMERBQWtDO0FBQ2xDLHdEQUFxRDtBQUVyRCxNQUFNLGFBQWEsR0FBa0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQ3JELFdBQVcsRUFDWCxhQUFhLEVBQ2IsUUFBUSxFQUNSLEtBQUssRUFDTCxTQUFTLEVBQ1QsUUFBUSxHQUNKLEVBQUUsR0FBTyxFQUFFLEVBQUU7SUFDakIsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxXQUFXLENBQUM7SUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBQSxlQUFLLEVBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRWhDLE9BQU8sQ0FDTCxDQUFDLGVBQU0sQ0FDUCxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDVCxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQ3RDLGFBQWEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUM3QixhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQ3pELFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUNyQixPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUVqQjtNQUFBLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQzlCLENBQUMsZUFBTSxDQUFDLElBQUksQ0FDWixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsQ0FDaEMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQ2QsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsQ0FDNUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFFakIsQ0FDRCxDQUFDLENBQ047SUFBQSxFQUFFLGVBQU0sQ0FBQyxDQUNWLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sWUFBWSxHQUFpQyxDQUFDLEVBQ2xELE9BQU8sRUFDUCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxLQUFLLEVBQ0wsR0FBRyxJQUFJLEVBQ0gsRUFBRSxFQUFFO0lBRVIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUdyQixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFBLGtCQUFJLEVBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLCtDQUErQyxDQUFFLENBQUM7YUFDekY7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXRCLE1BQU0sY0FBYyxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7UUFDdkMsUUFBUSxDQUFDO1lBQ1AsR0FBRyxNQUFNO1lBQ1QsR0FBRyxLQUFLO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0lBR0YsTUFBTSxlQUFlLEdBQUcsQ0FBQyxNQUFVLEVBQUUsRUFBRTtRQUNyQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNMLENBQUMsbUJBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQzVCO01BQUEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBVyxFQUFFLEtBQVUsRUFBRSxFQUFFO1lBQ3ZDLE1BQU0sRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFFBQVEsR0FBRyxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7WUFDNUMsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FDTCxDQUFDLGFBQWEsQ0FDWixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FDVCxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxLQUFLLEVBQUUsQ0FBQyxDQUM3QixXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FDcEIsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQzNCLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUN6QixRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FDbkIsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQ3JCLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUNiLElBQUksSUFBSSxDQUFDLEVBQ1QsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0o7SUFBQSxFQUFFLG1CQUFJLENBQUMsQ0FDUixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsU0FBUyxFQUFFO1FBQ1QsYUFBYSxFQUFFLEtBQUs7UUFDcEIsS0FBSyxFQUFFLE1BQU07UUFDYixjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtLQUNyQjtJQUNELE1BQU0sRUFBRTtRQUNOLE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLENBQUM7S0FDUjtDQUNGLENBQUMsQ0FBQztBQUVILGtCQUFlLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZpZXcsIFN0eWxlU2hlZXQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgZmluZH0gZnJvbSAnLi91dGlscy9hcnJheS51dGlscyc7XG5pbXBvcnQgeyBJTnVtYmVyUGxlYXNlUHJvcHMsIElWYWx1ZSB9IGZyb20gJy4vTnVtYmVyUGxlYXNlLmludGVyZmFjZSc7XG5pbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZSc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICdAcmVhY3QtbmF0aXZlLXBpY2tlci9waWNrZXInO1xuXG5jb25zdCBQaWNrZXJGYWN0b3J5OiBSZWFjdC5GQzxhbnk+ID0gUmVhY3QuZm9yd2FyZFJlZigoe1xuICBwaWNrZXJQcm9wcyxcbiAgc2VsZWN0ZWRWYWx1ZSxcbiAgb25DaGFuZ2UsXG4gIHN0eWxlLFxuICBpdGVtU3R5bGUsXG4gIGRpc2FibGVkLFxufTogYW55LCByZWY6YW55KSA9PiB7XG4gIGNvbnN0IHsgaWQsIGxhYmVsID0gJycsIG1pbiwgbWF4IH0gPSBwaWNrZXJQcm9wcztcbiAgY29uc3QgbnVtYmVycyA9IHJhbmdlKG1pbiwgbWF4KTtcblxuICByZXR1cm4gKFxuICAgIDxQaWNrZXJcbiAgICByZWY9e3JlZn1cbiAgICBzdHlsZT17eyAuLi5zdHlsZXMucGlja2VyLCAuLi5zdHlsZSB9fVxuICAgIHNlbGVjdGVkVmFsdWU9e3NlbGVjdGVkVmFsdWV9XG4gICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlOiBhbnkpID0+IG9uQ2hhbmdlKHsgW2lkXTogdmFsdWUgfSl9XG4gICAgaXRlbVN0eWxlPXtpdGVtU3R5bGV9XG4gICAgZW5hYmxlZD17IWRpc2FibGVkfVxuICAgID5cbiAgICAgIHtudW1iZXJzLm1hcCgobnVtYmVyLCBpbmRleCkgPT4gKFxuICAgICAgICA8UGlja2VyLkl0ZW1cbiAgICAgICAga2V5PXtgJHtpZH0tJHtudW1iZXJ9LSR7aW5kZXh9YH1cbiAgICAgICAgdmFsdWU9e251bWJlcn1cbiAgICAgICAgbGFiZWw9e2Ake251bWJlcn0gJHtsYWJlbH1gfVxuICAgICAgICBlbmFibGVkPXshZGlzYWJsZWR9XG5cbiAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgPC9QaWNrZXI+XG4gICk7XG59KTtcblxuY29uc3QgTnVtYmVyUGxlYXNlOiBSZWFjdC5GQzxJTnVtYmVyUGxlYXNlUHJvcHM+ID0gKHtcbiAgcGlja2VycyxcbiAgdmFsdWVzLFxuICBvbkNoYW5nZSxcbiAgaXRlbVN0eWxlLFxuICBzdHlsZSxcbiAgLi4ucmVzdFxufTogYW55KSA9PiB7XG5cbiAgY29uc29sZS5sb2cocGlja2Vycyk7XG5cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIE9iamVjdC5rZXlzKHZhbHVlcykuc29tZSgoa2V5KSA9PiB7XG4gICAgICBpZiAoIWZpbmQocGlja2VycywgKHBpY2tlcikgPT4gcGlja2VyLmlkID09PSBrZXkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUGlja2VyIHdpdGggaWQgJyR7a2V5fScgbm90IGZvdW5kLiBEb3VibGUgY2hlY2sgeW91ciBpbml0aWFsVmFsdWVzLmAsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3ZhbHVlcywgcGlja2Vyc10pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlSGFuZGxlID0gKHZhbHVlOiBJVmFsdWUpID0+IHtcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICAuLi52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuXG4gIGNvbnN0IGZpbmRQaWNrZXJWYWx1ZSA9IChwaWNrZXI6YW55KSA9PiB7XG4gICAgcmV0dXJuIHZhbHVlc1twaWNrZXIuaWRdO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAge3BpY2tlcnMubWFwKChwaWNrZXI6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCB7aWQsIHJlZiwgZGlzYWJsZWQgPSBmYWxzZSB9ID0gcGlja2VyO1xuICAgICAgICBjb25zdCBwaWNrZXJWYWx1ZSA9IGZpbmRQaWNrZXJWYWx1ZShwaWNrZXIpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQaWNrZXJGYWN0b3J5XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGtleT17YCR7aWR9LXBpY2tlci0ke2luZGV4fWB9XG4gICAgICAgICAgICBwaWNrZXJQcm9wcz17cGlja2VyfVxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZT17cGlja2VyVmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBpdGVtU3R5bGU9e2l0ZW1TdHlsZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L1ZpZXc+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICB9LFxuICBwaWNrZXI6IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBmbGV4OiAxLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlclBsZWFzZTtcbiJdfQ==