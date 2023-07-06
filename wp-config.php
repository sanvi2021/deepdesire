<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'deepdesire' );

/** Database username */
define( 'DB_USER', 'deep' );

/** Database password */
define( 'DB_PASSWORD', 'Sanvi@2021' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')Dl8!o9TKx{$^lh(8HhBEe#*6g@fdPru FX505t!G2x}/Mn&p^.0?m_Du6QZ4wBZ' );
define( 'SECURE_AUTH_KEY',  '%k^+I!kD&!/aU1+u5u{s@w6[lw~](0n^uVH@zMx-(-#W,NQW46cRc4J__sa.?$&C' );
define( 'LOGGED_IN_KEY',    '>D~ouKY{Q-<kY_n%-F 9|L!kQ9b4y01f:F2uI?HFh&nH1=~S>yoBiS3@e2pcD1p2' );
define( 'NONCE_KEY',        'PVD_XYiycbO-E(0xsuz:EE%wrc0QIatv<[R8lAgC:@fS&/ks4zTA{sAPCTQHC17M' );
define( 'AUTH_SALT',        'vd1$XZe8: X<G%NEe>0C?h?z8Vi&t2I_r/?G:x>s??jBNbd;V#01X.9DB&O|N0k%' );
define( 'SECURE_AUTH_SALT', '`B_2,r|q]{HT0`?lXlfC>iM1`FM~&3Wv:~mf)M,RcxS!75!w-In$8H#$g0qbCoZQ' );
define( 'LOGGED_IN_SALT',   'U`98Wly5IShTU/*`t01@8vn`fAE-o@2?2+O$dpMRFHq)8)+]5N!_Qkv({mIyCqi)' );
define( 'NONCE_SALT',       '6Y!H!P8%eA%s}3^Fa@/m+Z<l #<}(-<z$r]a3IV0/$_oIlCJP,=EHC&9WX0I.ydR' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
