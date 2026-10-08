/**
 * Parent Guidance icon set: Material Icons, Outlined style (@mui/icons-material).
 *
 * Every icon in the app is imported from here, never straight from @mui/icons-material,
 * so the style stays consistent and icons keep a simple API:
 *   <Search size={16} aria-hidden="true" className="text-pg-slate" />
 * - `size`: pixels (sets the font-size the SVG scales with). Tailwind size classes also work.
 * - Color comes from `currentColor`: use a text class (`text-pg-teal-dark`…).
 */
import type { ComponentType, CSSProperties, SVGProps } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";

import ArrowBackOutlined from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined";
import ArrowUpwardOutlined from "@mui/icons-material/ArrowUpwardOutlined";
import AttachFileOutlined from "@mui/icons-material/AttachFileOutlined";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CheckCircleOutlined from "@mui/icons-material/CheckCircleOutlined";
import CheckOutlined from "@mui/icons-material/CheckOutlined";
import ChecklistOutlined from "@mui/icons-material/ChecklistOutlined";
import ChevronLeftOutlined from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined";
import CircleOutlined from "@mui/icons-material/CircleOutlined";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import ClosedCaptionOutlined from "@mui/icons-material/ClosedCaptionOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import DragIndicatorOutlined from "@mui/icons-material/DragIndicatorOutlined";
import EditCalendarOutlined from "@mui/icons-material/EditCalendarOutlined";
import ErrorOutlineOutlined from "@mui/icons-material/ErrorOutlineOutlined";
import FormatQuoteOutlined from "@mui/icons-material/FormatQuoteOutlined";
import RouteOutlined from "@mui/icons-material/RouteOutlined";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ExpandLessOutlined from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import FileDownloadOutlined from "@mui/icons-material/FileDownloadOutlined";
import FilterListOutlined from "@mui/icons-material/FilterListOutlined";
import FullscreenOutlined from "@mui/icons-material/FullscreenOutlined";
import LanguageOutlined from "@mui/icons-material/LanguageOutlined";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import MoreHorizOutlined from "@mui/icons-material/MoreHorizOutlined";
import PauseOutlined from "@mui/icons-material/PauseOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import PlayArrowOutlined from "@mui/icons-material/PlayArrowOutlined";
import PlayCircleOutlined from "@mui/icons-material/PlayCircleOutlined";
import PrintOutlined from "@mui/icons-material/PrintOutlined";
import RemoveOutlined from "@mui/icons-material/RemoveOutlined";
import ScheduleOutlined from "@mui/icons-material/ScheduleOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import SendOutlined from "@mui/icons-material/SendOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import SignpostOutlined from "@mui/icons-material/SignpostOutlined";
import VerifiedUserOutlined from "@mui/icons-material/VerifiedUserOutlined";
import ViewSidebarOutlined from "@mui/icons-material/ViewSidebarOutlined";
import VolumeUpOutlined from "@mui/icons-material/VolumeUpOutlined";
import WarningAmberOutlined from "@mui/icons-material/WarningAmberOutlined";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "ref" | "fill"> & {
  size?: number | string;
  /** Icon color; prefer a text class. */
  fill?: string;
};

export type Icon = ComponentType<IconProps>;

function icon(Svg: ComponentType<SvgIconProps>, name: string): Icon {
  function PgIcon({ size, fill, style, strokeWidth: _strokeWidth, ...rest }: IconProps) {
    const s: CSSProperties = { ...style };
    if (size !== undefined) s.fontSize = typeof size === "number" ? `${size}px` : size;
    if (fill && fill !== "none" && fill !== "currentColor") s.color = fill;
    return <Svg {...(rest as SvgIconProps)} style={s} />;
  }
  PgIcon.displayName = name;
  return PgIcon;
}

export const AlertCircle = icon(ErrorOutlineOutlined, "AlertCircle");
export const AlertTriangle = icon(WarningAmberOutlined, "AlertTriangle");
export const ArrowLeft = icon(ArrowBackOutlined, "ArrowLeft");
export const ArrowRight = icon(ArrowForwardOutlined, "ArrowRight");
export const ArrowUp = icon(ArrowUpwardOutlined, "ArrowUp");
export const BookOpen = icon(MenuBookOutlined, "BookOpen");
export const CalendarDays = icon(CalendarMonthOutlined, "CalendarDays");
export const CalendarPlus = icon(EditCalendarOutlined, "CalendarPlus");
export const Captions = icon(ClosedCaptionOutlined, "Captions");
export const Check = icon(CheckOutlined, "Check");
export const CheckCircle = icon(CheckCircleOutlined, "CheckCircle");
export const CheckCircle2 = CheckCircle;
export const ChevronDown = icon(ExpandMoreOutlined, "ChevronDown");
export const ChevronLeft = icon(ChevronLeftOutlined, "ChevronLeft");
export const ChevronRight = icon(ChevronRightOutlined, "ChevronRight");
export const ChevronUp = icon(ExpandLessOutlined, "ChevronUp");
export const Circle = icon(CircleOutlined, "Circle");
export const Clock = icon(ScheduleOutlined, "Clock");
export const Download = icon(FileDownloadOutlined, "Download");
export const FileText = icon(DescriptionOutlined, "FileText");
export const Globe2 = icon(LanguageOutlined, "Globe2");
export const Info = icon(InfoOutlined, "Info");
export const Quote = icon(FormatQuoteOutlined, "Quote");
export const Route = icon(RouteOutlined, "Route");
export const GripVertical = icon(DragIndicatorOutlined, "GripVertical");
export const ListChecks = icon(ChecklistOutlined, "ListChecks");
export const ListFilter = icon(FilterListOutlined, "ListFilter");
export const LockKeyhole = icon(LockOutlined, "LockKeyhole");
export const MapPin = icon(LocationOnOutlined, "MapPin");
export const Maximize2 = icon(FullscreenOutlined, "Maximize2");
export const Menu = icon(MenuOutlined, "Menu");
export const MessageCircle = icon(ChatBubbleOutlineOutlined, "MessageCircle");
export const Minus = icon(RemoveOutlined, "Minus");
export const MoreHorizontal = icon(MoreHorizOutlined, "MoreHorizontal");
export const PanelLeft = icon(ViewSidebarOutlined, "PanelLeft");
export const Paperclip = icon(AttachFileOutlined, "Paperclip");
export const Pause = icon(PauseOutlined, "Pause");
export const Phone = icon(PhoneOutlined, "Phone");
export const Play = icon(PlayArrowOutlined, "Play");
export const PlayCircle = icon(PlayCircleOutlined, "PlayCircle");
export const Printer = icon(PrintOutlined, "Printer");
export const Search = icon(SearchOutlined, "Search");
export const Send = icon(SendOutlined, "Send");
export const Settings = icon(SettingsOutlined, "Settings");
export const ShieldCheck = icon(VerifiedUserOutlined, "ShieldCheck");
export const Signpost = icon(SignpostOutlined, "Signpost");
export const Volume2 = icon(VolumeUpOutlined, "Volume2");
export const X = icon(CloseOutlined, "X");

// Aliases used by the shadcn base components (components/ui).
export {
  Check as CheckIcon,
  ChevronDown as ChevronDownIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChevronUp as ChevronUpIcon,
  Circle as CircleIcon,
  GripVertical as GripVerticalIcon,
  Minus as MinusIcon,
  MoreHorizontal as MoreHorizontalIcon,
  PanelLeft as PanelLeftIcon,
  Search as SearchIcon,
  X as XIcon,
};
